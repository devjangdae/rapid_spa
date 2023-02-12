/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const items = [
  {
    categoryCode: "001",
    categoryName: "RUNNING_STATUS",
    description: "",
    dest: "Cons",
    filePath: "/LOG/001",
    fileName: "*",
    auto: true,
    display: true,
    port: 25,
  },
  {
    categoryCode: "002",
    categoryName: "RUNNING_STATUS(event)",
    description: "",
    dest: "Cons",
    filePath: "/LOG/002",
    fileName: "*",
    auto: true,
    display: true,
    port: 21,
  },
];

const categorySlice = createSlice({
  name: "category",
  initialState: { items },
  reducers: {
    caUpdate: (state, action) => {
      const testObj = {
        categoryName: "RUNNING_TEST_TEST_TEST",
      };

      for (let i = 0; i < action.payload; i += 1) {
        state.items.push(testObj);
      }
    },
  },
});

export default categorySlice;
export const { caUpdate } = categorySlice.actions;
