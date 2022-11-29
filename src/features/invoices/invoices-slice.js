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
    saveNewInvoice: (state, action) => {
      invoicesAdapter.addOne(state, action.payload);
    },
    editInvoice: (state, action) => {
      const { id, fields, taskList } = action.payload;
      invoicesAdapter.updateOne(state, {
        id,
        changes: { fields, taskList },
      });
    },
    markInvoicePaid: (state, action) => {
      const id = action.payload;

      invoicesAdapter.updateOne(state, {
        id: id,
        changes: {
          status: "paid",
        },
      });
    },

    deleteInvoice: (state, action) => {
      invoicesAdapter.removeOne(state, action.payload);
    },
  },
});

export const {
  loadInvoices,
  saveNewInvoice,
  editInvoice,
  markInvoicePaid,
  deleteInvoice,
} = invoicesSlice.actions;

export const invoicesSelector = invoicesAdapter.getSelectors(
  (state) => state.invoices
);

export default invoicesSlice;
