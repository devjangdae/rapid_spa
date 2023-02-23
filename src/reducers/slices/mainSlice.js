import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isSearching: false,
    isOpened: true,
    currentDate: "",
    currentStartDate: "", //
    currentEndDate: "", //
    currentCategory: [],
    currentCategoryCode: [], //
    currentCategoryName: [], //
    currentFabMachineName: [],
    currentFabName: [], //
    currentMachineName: [], //
  },
  reducers: {
    clickSearchButton: (state, action) => {
      state.isSearching = true;
    },
    clickResetButton: (state, action) => {
      state.isSearching = false;
    },

    openDrawer: (state, action) => {
      state.isOpened = true;
    },
    closeDrawer: (state, action) => {
      state.isOpened = false;
    },
    currentDateUpdate: (state, action) => {
      state.currentDate = action.payload;
    },
    currentStartDateUpdate: (state, action) => {
      state.currentStartDate = action.payload;
    },
    currentEndDateUpdate: (state, action) => {
      state.currentEndDate = action.payload;
    },
    currentCategoryUpdate: (state, action) => {
      state.currentCategory.push(action.payload);
    },
    currentCategoryCodeUpdate: (state, action) => {
      state.currentCategoryCode.push(action.payload);
    },
    currentCategoryNameUpdate: (state, action) => {
      state.currentCategoryName.push(action.payload);
    },
    currentFabMachineNameUpdate: (state, action) => {
      state.currentFabMachineName.push(action.payload);
    },
    currentMachineNameUpdate: (state, action) => {
      state.currentMachineName.push(action.payload);
    },
    currentFabNameUpdate: (state, action) => {
      state.currentFabName.push(action.payload);
    },
    currentDateReset: (state, action) => {
      state.currentDate = "";
    },
    currentStartDateReset: (state, action) => {
      state.currentStartDate = "";
    },
    currentEndDateReset: (state, action) => {
      state.currentEndDate = "";
    },
    currentCategoryReset: (state, action) => {
      state.currentCategory = [];
    },
    currentCategoryCodeReset: (state, action) => {
      state.currentCategoryCode = [];
    },
    currentCategoryNameReset: (state, action) => {
      state.currentCategoryName = [];
    },
    currentFabMachineNameReset: (state, action) => {
      state.currentFabMachineName = [];
    },
    currentMachineNameReset: (state, action) => {
      state.currentMachineName = [];
    },
    currentFabNameReset: (state, action) => {
      state.currentFabName = [];
    },
  },
});

export default mainSlice.reducer;
export const {
  clickResetButton,
  clickSearchButton,
  openDrawer,
  closeDrawer,
  currentDateUpdate,
  currentStartDateUpdate,
  currentEndDateUpdate,
  currentCategoryUpdate,
  currentCategoryCodeUpdate,
  currentCategoryNameUpdate,
  currentFabMachineNameUpdate,
  currentMachineNameUpdate,
  currentFabNameUpdate,
  currentDateReset,
  currentStartDateReset,
  currentEndDateReset,
  currentCategoryReset,
  currentCategoryCodeReset,
  currentCategoryNameReset,
  currentFabMachineNameReset,
  currentMachineNameReset,
  currentFabNameReset,
} = mainSlice.actions;
