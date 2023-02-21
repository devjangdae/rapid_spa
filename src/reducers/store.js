import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import categorySlice from "./slices/categorySlice";
import machineSlice from "./slices/machineSlice";
import dateSlice from "./slices/dateSlice";
import drawerSlice from "./slices/drawerSlice";
import mainSlice from "./slices/mainSlice";

const store = configureStore({
  reducer: {
    counter123: counterSlice.reducer,
    categoryData: categorySlice.reducer,
    machineData: machineSlice.reducer,
    dateData: dateSlice.reducer,
    mainData: mainSlice.reducer,
    asdasdasd: drawerSlice.reducer,
  },
});

export default store;
