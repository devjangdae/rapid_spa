import { createSlice } from "@reduxjs/toolkit";

const machineSlice = createSlice({
  name: "machine",
  initialState: {
    item: [],
    seleted: [],
    seletedName: [],
    seletedLine: [],
    checked: [],
    validMachine: [],
  },
  reducers: {
    machineSelectedUpdate: (state, action) => {
      state.seleted.push(action.payload);
    },

    machineSelectedUpdate_: (state, action) => {
      state.seleted = state.seleted.filter((item) => item !== action.payload);
    },

    lineSelectedUpdate: (state, action) => {
      state.seletedLine.push(action.payload);
    },

    lineSelectedUpdate_: (state, action) => {
      const index = state.seletedLine.indexOf(action.payload);
      if (index > -1) {
        state.seletedLine.splice(index, 1);
      }
    },

    nameSelectedUpdate: (state, action) => {
      state.seletedName.push(action.payload);
    },

    checkedUpdate: (state, action) => {
      state.checked.push(action.payload);
    },

    checkedAll: (state, action) => {
      state.checked = state.validMachine;
    },

    checkedDefault: (state, action) => {
      state.checked = [];
    },

    validMachine: (state, action) => {
      state.validMachine.push(action.payload);
    },
  },
});

export default machineSlice;
export const {
  machineSelectedUpdate,
  machineSelectedUpdate_,
  lineSelectedUpdate,
  lineSelectedUpdate_,
  nameSelectedUpdate,
  checkedUpdate,
  validMachine,
  checkedDefault,
  checkedAll,
} = machineSlice.actions;
