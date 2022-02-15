import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import photosSlice from "./slices";
import loggerMiddleware from "./logger";
const preloadedState = {};
const store = configureStore({
  reducer: {
    photos: photosSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export default store;
