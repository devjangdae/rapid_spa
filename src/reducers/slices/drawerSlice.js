import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: { isOpened: true },
  reducers: {
    openDrawer: (state, action) => {
      state.isOpened = true;
    },
    closeDrawer: (state, action) => {
      state.isOpened = false;
    },
  },
});

export default drawerSlice;
// eslint-disable-next-line no-empty-pattern
export const { openDrawer, closeDrawer } = drawerSlice.actions;
