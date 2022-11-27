import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const invoicesAdapter = createEntityAdapter({
  selectId: (invoice) => invoice.id,
});

const invoicesSlice = createSlice({
  name: "@@invoices",
  initialState: invoicesAdapter.getInitialState(),
  reducers: {
    loadInvoices: (state, action) => {
      invoicesAdapter.setAll(state, action.payload);
    },
  },
});

export const { loadInvoices } = invoicesSlice.actions;

export const invoicesSelector = invoicesAdapter.getSelectors(
  (state) => state.invoices
);

export default invoicesSlice;
