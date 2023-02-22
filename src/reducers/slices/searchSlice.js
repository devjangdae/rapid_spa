import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");

const asyncSearchThunk = createAsyncThunk(
  "searchSlice/asyncSearchThunk",
  async (aa) => {
    // 1 File Search ID 정보 취득
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log(`aa:${aa}`);
    // console.log(`bb:${JSON.stringify(bb)}`);
    // console.log(`cc:${cc}`);
    // console.log(`dd:${dd}`);
    // console.log(`ee:${ee}`);
    // console.log(`ff:${ff}`);
    const response = await axios.post(
      "/rss/api/ftp/search",
      {
        fabNames: aa,
        machineNames: aa,
        categoryCodes: aa,
        categoryNames: aa,
        startDate: aa,
        endDate: aa,
        folder: false,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const searchId = await response.data.searchId;

    // // 2 File Search 상태 및 Result URL 취득
    // const response2 = await axios.get(`/rss/api/ftp/search/${searchId}`, {
    //   params: { searchId },
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    // const resultUrl = await response2.data.resultUrl;

    // // 3 File Search Result 정보 취득
    // const response3 = await axios.get(`${resultUrl}`, {
    //   params: { resultUrl },
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });

    return searchId;
  }
);

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    fabNames: [],
    machineNames: [],
    categoryCodes: [],
    categoryName: [],
    startDate: "",
    endDate: "",
    status: "Welcome!!!",
    searchId: "",
    resultUrl: "",
    finalListData: [],
  },

  reducers: {
    setFabNames: (state, action) => {
      state.fabNames = action.payload;
    },
    setMachineNames: (state, action) => {
      state.machineNames = action.payload;
    },
    setCategoryCodes: (state, action) => {
      state.categoryCodes = action.payload;
    },
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(asyncSearchThunk.pending, (state, action) => {
      state.status = "loading!!!";
    });
    builder.addCase(asyncSearchThunk.fulfilled, (state, action) => {
      state.searchId = action.payload;
      state.status = "complete!!!";
    });
    builder.addCase(asyncSearchThunk.rejected, (state, action) => {
      state.status = "fail!!!";
    });
  },
});

export default searchSlice.reducer;
export const {
  setFabNames,
  setMachineNames,
  setCategoryCodes,
  setCategoryName,
  setStartDate,
  setEndDate,
} = searchSlice.actions;
export { asyncSearchThunk };
