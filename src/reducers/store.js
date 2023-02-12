import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import categorySlice from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    counter123: counterSlice.reducer,
    categoryData: categorySlice.reducer,
  },
});

export default store;
