/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const items = [

];

const categorySlice = createSlice({
  name: "category",
  initialState: {item:[], seleted:[]},
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
  },
});

export default categorySlice;
export const { caUpdate, caUpdate2,caUpdate3 } = categorySlice.actions;
