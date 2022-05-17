import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducer/movieReducer";
import nguoiDungReducer from "../reducer/nguoiDungReducer";

export const store = configureStore({
  reducer: {
    // Khai báo state
    movieReducer,
    nguoiDungReducer,
  },
});
