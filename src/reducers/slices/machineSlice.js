import { createSlice } from "@reduxjs/toolkit";

const machineSlice = createSlice({
  name: "machine",
  initialState: {
    item: [],
    seleted: [],
    seletedName: [],
    seletedLine: [],
    checkedMachineName: [],
    checkedMachineLine: [],
    checked: [],
    checkedMain: [],
    checkedLine: [],
    validMachine: [],
    validLine: [],
    machineErrorMsg: "",
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

    checkedMainUpdate: (state, action) => {
      state.checkedMain.push(action.payload);
    },

    checkedMainDelete: (state, action) => {
      // state.checkedLine = state.checkedLine.filter((item) => item !== action.payload);

      const index = state.checkedMain.indexOf(action.payload);

      if (index > -1) {
        state.checkedMain.splice(index, 1);
      }
    },

    checkedMainReset: (state, action) => {
      state.checkedMain = [];
    },

    checkedDelete: (state, action) => {
      state.checked = state.checked.filter((item) => item !== action.payload);
    },

    checkedMachineNameUpdate: (state, action) => {
      state.checkedMachineName.push(action.payload);
    },

    checkedMachineNameDelete: (state, action) => {
      state.checkedMachineName = state.checkedMachineName.filter(
        (item) => item !== action.payload
      );
    },

    checkedMachineLineUpdate: (state, action) => {
      state.checkedMachineLine.push(action.payload);
    },

    checkedMachineLineDelete: (state, action) => {
      // state.checkedLine = state.checkedLine.filter((item) => item !== action.payload);

      const index = state.checkedMachineLine.indexOf(action.payload);

      if (index > -1) {
        state.checkedMachineLine.splice(index, 1);
      }
    },

    checkedLineUpdate: (state, action) => {
      state.checkedLine.push(action.payload);
    },

    checkedLineDelete: (state, action) => {
      // state.checkedLine = state.checkedLine.filter((item) => item !== action.payload);

      const index = state.checkedLine.indexOf(action.payload);

      if (index > -1) {
        state.checkedLine.splice(index, 1);
      }
    },

    checkedAll: (state, action) => {
      state.checked = state.validMachine;
    },

    checkedReset: (state, action) => {
      state.checked = [];
    },

    checkedLineReset: (state, action) => {
      state.checkedLine = [];
    },

    validMachineInitiate: (state, action) => {
      state.validMachine = [];
    },

    validMachineUpdate: (state, action) => {
      state.validMachine.push(action.payload);
    },

    validLineUpdate: (state, action) => {
      state.validLine.push(action.payload);
    },

    updateMachineErrorMsg: (state, action) => {
      state.machineErrorMsg = "! Please select at least One Machine";
    },
    machineErrorMsg: (state, action) => {
      state.machineErrorMsg = "";
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
  validMachineUpdate,
  validMachineInitiate,
  checkedDefault,
  checkedDelete,
  checkedAll,
  checkedReset,
  checkedLineReset,
  machineErrorMsg,
  updateMachineErrorMsg,
  checkedLineDelete,
  checkedLineUpdate,
  checkedMachineNameDelete,
  checkedMachineNameUpdate,
  checkedMachineLineUpdate,
  checkedMachineLineDelete,
  checkedMainUpdate,
  checkedMainReset,
  checkedMainDelete,
  validLineUpdate,
} = machineSlice.actions;
