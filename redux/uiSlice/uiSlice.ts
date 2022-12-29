import { createSlice } from "@reduxjs/toolkit";
import { RootStore } from "../store";

interface UiState {
  sidebarOpen: boolean;
}

const initialState: UiState = {
  sidebarOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { toggleSidebar } = uiSlice.actions;
export const selectSidebarOpen = (state: RootStore) => state.ui.sidebarOpen;
export default uiSlice.reducer;
