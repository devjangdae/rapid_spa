import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    checkedDate: "",
    checkedStartDate: "",
    checkedEndDate: "",
    checkedDefaultStartDate: "",
    checkedDefaultEndDate: "",
    dateErrorMsg: "",
  },
  reducers: {
    checkedDateUpdate: (state, action) => {
      state.checkedDate = action.payload;
    },

    checkedStartDateUpdate: (state, action) => {
      state.checkedStartDate = action.payload;
    },

    checkedEndDateUpdate: (state, action) => {
      state.checkedEndDate = action.payload;
    },

    checkedDefaultStartDateUpdate: (state, action) => {
      state.checkedDefaultStartDate = action.payload;
    },

    checkedDefaultEndDateUpdate: (state, action) => {
      state.checkedDefaultEndDate = action.payload;
    },

    dateErrorMsgUpdate: (state, action) => {
      state.dateErrorMsg = "! Please select Date";
    },

    dateErrorMsgReset: (state, action) => {
      state.dateErrorMsg = "";
    },
  },
});

export default dateSlice.reducer;
// eslint-disable-next-line no-empty-pattern
export const {
  checkedDateUpdate,
  checkedStartDateUpdate,
  checkedEndDateUpdate,
  checkedDefaultStartDateUpdate,
  checkedDefaultEndDateUpdate,
  dateErrorMsgUpdate,
  dateErrorMsgReset,
} = dateSlice.actions;
