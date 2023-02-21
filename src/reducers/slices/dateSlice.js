import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: { date: "", startDate: "", endDate: "", dateErrorMsg: "" },
  reducers: {
    dateUpdate: (state, action) => {
      state.date = action.payload;
    },

    startDateUpdate: (state, action) => {
      state.startDate = action.payload;
    },

    endDateUpdate: (state, action) => {
      state.endDate = action.payload;
    },

    updateDateErrorMsg: (state, action) => {
      state.dateErrorMsg = "! Please select Date";
    },

    dateMsg: (state, action) => {
      state.dateErrorMsg = "";
    },
  },
});

export default dateSlice;
// eslint-disable-next-line no-empty-pattern
export const {
  dateUpdate,
  startDateUpdate,
  endDateUpdate,
  dateMsg,
  updateDateErrorMsg,
} = dateSlice.actions;
