import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");

const asyncSearchThunk = createAsyncThunk(
  "searchSlice/asyncSearchThunk",
  async (thunkParameterArray) => {
    // 1 File Search ID 정보 취득
    const responseSearchID = await axios.post(
      "/rss/api/ftp/search",
      {
        fabNames: thunkParameterArray[0],
        machineNames: thunkParameterArray[1],
        categoryCodes: thunkParameterArray[2],
        categoryNames: thunkParameterArray[3],
        startDate: thunkParameterArray[4],
        endDate: thunkParameterArray[5],
        folder: false,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const searchId = await responseSearchID.data.searchId;

    // 2 File Search 상태 및 Result URL 취득
    const responseResultUrl = await axios.get(
      `/rss/api/ftp/search/${searchId}`,
      {
        params: { searchId },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const resultUrl = await responseResultUrl.data.resultUrl;

    // 3 File Search Result 정보 취득
    const responseResultLists = await axios.get(`${resultUrl}`, {
      params: { resultUrl },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return [responseResultLists.data.lists];
  }
);

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    status: "Welcome!!!",
    finalListData: [],
  },

  extraReducers: (builder) => {
    builder.addCase(asyncSearchThunk.pending, (state, action) => {
      state.status = "loading!!!";
    });
    builder.addCase(asyncSearchThunk.fulfilled, (state, action) => {
      state.finalListData = action.payload;
      state.status = "complete!!!";
    });
    builder.addCase(asyncSearchThunk.rejected, (state, action) => {
      state.status = "fail!!!";
    });
  },
});

export default searchSlice.reducer;
export { asyncSearchThunk };
