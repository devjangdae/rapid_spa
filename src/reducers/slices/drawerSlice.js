import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: { isOpened: true, value: 0, status: "Welcome" },
  reducers: {
    openDrawer: (state, action) => {
      state.isOpened = true;
    },
    closeDrawer: (state, action) => {
      state.isOpened = false;
    },
  },
});

export default drawerSlice.reducer;
export const { openDrawer, closeDrawer } = drawerSlice.actions;
