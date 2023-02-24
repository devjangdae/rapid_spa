/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    const searchId = await responseSearchID.data.searchId;
    console.log("searchID 실행함");

    // const responseResultUrl = await axios.get(
    //   `/rss/api/ftp/search/${searchId}`,
    //   {
    //     params: { searchId },
    //     headers: {
    //       Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    //     },
    //   }
    // );

    // const resultStatus = await responseResultUrl.data.status; // (done | in-process | error)

    let resultStatus = "";
    let resultUrl = "";
    do {
      console.log("do 실행함");
      // 2 File Search 상태 및 Result URL 취득
      const respons = await axios.get(`/rss/api/ftp/search/${searchId}`, {
        params: { searchId },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      });

      // resultStatus 체크
      resultStatus = await respons.data.status; // (done | in-process | error)

      if (resultStatus === "done") {
        // 3 File Search Result 정보 취득
        resultUrl = await respons.data.resultUrl;
        const responseResultLists = await axios.get(`${resultUrl}`, {
          params: { resultUrl },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        });

        return responseResultLists.data.lists;
      }
      if (resultStatus === "error") {
        return [""]; // 에러에 대한 처리 해야함.(미완성)
      }
    } while (resultStatus === "in-process");

    // resultUrl
    // const resultUrl = await responseResultUrl.data.resultUrl;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    status: "Welcome!!!",
    finalListData: [],
  },
  reducers: {
    changeWelcomeStatus: (state, action) => {
      state.status = "Welcome!!!";
    },
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
export const { changeWelcomeStatus } = searchSlice.actions;
export { asyncSearchThunk };
