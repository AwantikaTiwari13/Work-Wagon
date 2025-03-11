import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    job: jobSlice,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export default store;
