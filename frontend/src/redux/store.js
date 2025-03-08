import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export const persistor = persistStore(store);
export default store;
