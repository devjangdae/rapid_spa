import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import machineSlice from "./slices/machineSlice";
import dateSlice from "./slices/dateSlice";
import drawerSlice from "./slices/drawerSlice";
import mainSlice from "./slices/mainSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    categoryData: categorySlice,
    machineData: machineSlice,
    dateData: dateSlice,
    drawer: drawerSlice,
    mainData: mainSlice,
    search: searchSlice,
  },
});

export default store;
