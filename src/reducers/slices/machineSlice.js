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
    validMachine: [],
    validLine: [],
    machineErrorMsg: "",
    checkedMachineName2: [],
    checkedFabMachineName: [],
    checkedFabName: [],
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

    checkedAll: (state, action) => {
      state.checked = state.validMachine;
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

    machineErrorMsgUpdate: (state, action) => {
      state.machineErrorMsg = "! Please select at least one Machine";
    },
    machineErrorMsgReset: (state, action) => {
      state.machineErrorMsg = "";
    },
    // =============================================
    checkedFabMachineNameUpdate: (state, action) => {
      state.checkedFabMachineName.push(action.payload);
    },

    checkedFabMachineNameDelete: (state, action) => {
      // state.checkedLine = state.checkedLine.filter((item) => item !== action.payload);

      const index = state.checkedFabMachineName.indexOf(action.payload);

      if (index > -1) {
        state.checkedFabMachineName.splice(index, 1);
      }
    },

    checkedFabMachineNameReset: (state, action) => {
      state.checkedFabMachineName = [];
    },

    checkedMachineName2Update: (state, action) => {
      state.checkedMachineName2.push(action.payload);
    },

    checkedMachineName2Delete: (state, action) => {
      state.checkedMachineName2 = state.checkedMachineName2.filter(
        (item) => item !== action.payload
      );
    },

    checkedMachineName2Reset: (state, action) => {
      state.checkedMachineName2 = [];
    },

    checkedFabNameUpdate: (state, action) => {
      state.checkedFabName.push(action.payload);
    },

    checkedFabNameDelete: (state, action) => {
      // state.checkedLine = state.checkedLine.filter((item) => item !== action.payload);

      const index = state.checkedFabName.indexOf(action.payload);

      if (index > -1) {
        state.checkedFabName.splice(index, 1);
      }
    },

    checkedFabNameReset: (state, action) => {
      state.checkedFabName = [];
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
  validMachineUpdate,
  validMachineInitiate,
  checkedAll,
  machineErrorMsgReset,
  machineErrorMsgUpdate,
  checkedMachineNameDelete,
  checkedMachineNameUpdate,
  checkedMachineLineUpdate,
  checkedMachineLineDelete,
  validLineUpdate,
  checkedFabMachineNameUpdate,
  checkedFabMachineNameDelete,
  checkedFabMachineNameReset,
  checkedMachineName2Update,
  checkedMachineName2Delete,
  checkedMachineName2Reset,
  checkedFabNameUpdate,
  checkedFabNameDelete,
  checkedFabNameReset,
} = machineSlice.actions;
