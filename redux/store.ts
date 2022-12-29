import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice/uiSlice";
export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
