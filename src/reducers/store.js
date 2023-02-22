import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import categorySlice from "./slices/categorySlice";
import machineSlice from "./slices/machineSlice";
import dateSlice from "./slices/dateSlice";
import drawerSlice from "./slices/drawerSlice";
import mainSlice from "./slices/mainSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    counter123: counterSlice,
    categoryData: categorySlice,
    machineData: machineSlice,
    dateData: dateSlice,
    mainData: mainSlice,
    asdasdasd: drawerSlice,
    search: searchSlice,
  },
});

export default store;
