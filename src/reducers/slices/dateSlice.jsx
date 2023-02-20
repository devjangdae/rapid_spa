import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: { date: "", startDate: "", endDate: "" },
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
  },
});

export default dateSlice;
// eslint-disable-next-line no-empty-pattern
export const { dateUpdate, startDateUpdate, endDateUpdate } = dateSlice.actions;
