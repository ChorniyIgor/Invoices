import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
});

export default invoicesSlice;
