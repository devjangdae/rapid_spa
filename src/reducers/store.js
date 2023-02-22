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
    counter123: counterSlice.reducer,
    categoryData: categorySlice.reducer,
    machineData: machineSlice.reducer,
    dateData: dateSlice.reducer,
    mainData: mainSlice.reducer,
    asdasdasd: drawerSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
