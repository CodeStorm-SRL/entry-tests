import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./features/result/resultSlice";

export const store = configureStore({
  reducer: {
    result: resultReducer,
  },
});
