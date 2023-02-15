/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const items = [

];

const categorySlice = createSlice({
  name: "category",
  initialState: {item:[], seleted:[], seletedCode:[], seletedName:[]},
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

    caUpdate4: (state, action) => {   
      state.seletedCode.push(action.payload);
    },

    caUpdate5: (state, action) => {   
      state.seletedName.push(action.payload);
    },
  },
});

export default categorySlice;
export const { caUpdate, caUpdate2,caUpdate3, caUpdate4, caUpdate5} = categorySlice.actions;
