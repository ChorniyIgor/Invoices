import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export const getThemeMode = (state) => state.theme;

export default themeSlice;
