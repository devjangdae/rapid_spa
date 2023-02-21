import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: { isSearching: false, isOpened: true },
  reducers: {
    clickSearchButton: (state, action) => {
      state.isSearching = true;
    },
    clickResetButton: (state, action) => {
      state.isSearching = false;
    },

    openDrawer: (state, action) => {
      state.isOpened = true;
    },
    closeDrawer: (state, action) => {
      state.isOpened = false;
    },
  },
});

export default mainSlice;
export const { clickResetButton, clickSearchButton, openDrawer, closeDrawer } =
  mainSlice.actions;
