import { createSlice } from "@reduxjs/toolkit";
import { RootStore } from "../store";

interface UiState {
  sidebarOpen: boolean;
  fabMenu: boolean;
}

const initialState: UiState = {
  sidebarOpen: false,
  fabMenu: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleFabMenu: (state) => {
      state.fabMenu = !state.fabMenu;
    },
  },
});

export const { toggleSidebar, toggleFabMenu } = uiSlice.actions;
export const selectSidebarOpen = (state: RootStore) => state.ui.sidebarOpen;
export const selectFabMenu = (state: RootStore) => state.ui.fabMenu;
export default uiSlice.reducer;
