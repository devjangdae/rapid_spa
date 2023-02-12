/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // 작은 스토어임!
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      // ... 안써도 됨
      // response.data.lists.map((item) => [item["line"], item])
      state.value += action.payload;
      // const testObj = {
      //   categoryName: "RUNNING_TEST_TEST_TEST",
      // };
      //   const newItems = [...state.items];
      //   for (let i = 0; i < action.payload; i += 1) {
      //     newItems.push(testObj);
      //   }
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
