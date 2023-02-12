import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter123: counterSlice.reducer,
  },
});

export default store;
