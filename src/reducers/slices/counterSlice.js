/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // 작은 스토어임!
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      // ... 안써도 됨
      state.value += action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
