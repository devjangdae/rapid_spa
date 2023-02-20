import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { item: [], seleted: [], seletedCode: [], seletedName: [] },
  reducers: {
    caUpdate: (state, action) => {
      const testObj = {
        categoryName: "RUNNING_TEST_TEST_TEST",
      };

      for (let i = 0; i < action.payload; i += 1) {
        state.items.push(testObj);
      }
    },

    caUpdate2: (state, action) => {
      state.items.push(action.payload);
    },

    caUpdate3: (state, action) => {
      state.seleted.push(action.payload);
    },

    caUpdate3_: (state, action) => {
      state.seleted = state.seleted.filter((item) => item !== action.payload);
    },

    caUpdate4: (state, action) => {
      state.seletedCode.push(action.payload);
    },

    caUpdate4_: (state, action) => {
      state.seletedCode = state.seletedCode.filter(
        (item) => item !== action.payload
      );
    },

    caUpdate5: (state, action) => {
      state.seletedName.push(action.payload);
    },

    caUpdate5_: (state, action) => {
      state.seletedName = state.seletedName.filter(
        (item) => item !== action.payload
      );
    },

    seletedDefault: (state, action) => {
      state.seleted = [];
    },
  },
});

export default categorySlice;
export const {
  caUpdate,
  caUpdate2,
  caUpdate3,
  caUpdate4,
  caUpdate5,
  caUpdate3_,
  seletedDefault,
} = categorySlice.actions;
