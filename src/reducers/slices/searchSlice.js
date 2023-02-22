import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
let searchId2;

const asyncSearchThunk = createAsyncThunk(
  "searchSlice/asyncSearchThunk",
  async () => {
    const response = await axios.post(
      "/rss/api/ftp/search",
      {
        fabNames: ["Line1"],
        machineNames: ["MPA_208"],
        categoryCodes: ["001"],
        categoryNames: ["RUNNING_STATUS"],
        startDate: "20221001144108",
        endDate: "20230215144113",
        folder: false,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const searchId = await response.data.searchId;
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
      state.value = action.payload;
      state.status = "complete!!!";
    });
    builder.addCase(asyncSearchThunk.rejected, (state, action) => {
      state.status = "fail!!!";
    });
  },
});

export default searchSlice;
export const {
  setFabNames,
  setMachineNames,
  setCategoryCodes,
  setCategoryName,
  setStartDate,
  setEndDate,
} = searchSlice.actions;
export { asyncSearchThunk };
