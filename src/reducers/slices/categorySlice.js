import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    item: [],
    checkedCategory: [],
    checkedCategoryCode: [],
    checkedCategoryName: [],
    categoryErrorMsg: "",
  },
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

    updateCheckedCategory: (state, action) => {
      state.checkedCategory.push(action.payload);
    },

    deleteCheckedCategory: (state, action) => {
      state.checkedCategory = state.checkedCategory.filter(
        (item) => item !== action.payload
      );
    },

    updateCheckedCategoryCode: (state, action) => {
      state.checkedCategoryCode.push(action.payload);
    },

    deleteCheckedCategoryCode: (state, action) => {
      state.checkedCategoryCode = state.checkedCategoryCode.filter(
        (item) => item !== action.payload
      );
    },

    updateCheckedCategoryName: (state, action) => {
      state.checkedCategoryName.push(action.payload);
    },

    deleteCheckedCategoryName: (state, action) => {
      state.checkedCategoryName = state.checkedCategoryName.filter(
        (item) => item !== action.payload
      );
    },

    checkedCategoryReset: (state, action) => {
      state.checkedCategory = [];
    },

    checkedCategoryCodeReset: (state, action) => {
      state.checkedCategoryCode = [];
    },

    checkedCategoryNameReset: (state, action) => {
      state.checkedCategoryName = [];
    },

    sortCheckedCategory: (state, action) => {
      state.checkedCategory = state.checkedCategory.sort();
    },

    updateCategoryErrorMsg: (state, action) => {
      state.categoryErrorMsg = "! Please select at least One Category";
    },
    categoryErrorMsg: (state, action) => {
      state.categoryErrorMsg = "";
    },
  },
});

export default categorySlice.reducer;
export const {
  caUpdate,
  caUpdate2,
  updateCheckedCategory,
  deleteCheckedCategory,
  updateCheckedCategoryCode,
  deleteCheckedCategoryCode,
  updateCheckedCategoryName,
  deleteCheckedCategoryName,
  updateCategoryErrorMsg,
  categoryErrorMsg,
  sortCheckedCategory,
  checkedCategoryReset,
  checkedCategoryCodeReset,
  checkedCategoryNameReset,
} = categorySlice.actions;
