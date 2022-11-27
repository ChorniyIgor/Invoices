import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addInvoiceForm: {
    visability: false,
  },
  editInvoiceForm: {
    visability: false,
  },
};

const appSlice = createSlice({
  name: "@@app",
  initialState,
  reducers: {
    showAddInvoiceForm: (state) => {
      state.addInvoiceForm.visability = true;
    },
    hideAddInvoiceForm: (state) => {
      state.addInvoiceForm.visability = false;
    },
    showEditInvoiceForm: (state) => {
      state.editInvoiceForm.visability = true;
    },
    hideEditInvoiceForm: (state) => {
      state.editInvoiceForm.visability = false;
    },
  },
});

export const {
  showAddInvoiceForm,
  hideAddInvoiceForm,
  showEditInvoiceForm,
  hideEditInvoiceForm,
} = appSlice.actions;

export default appSlice;
