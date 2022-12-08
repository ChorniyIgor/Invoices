import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./filter/filter-slice";
import invoiceFormSlice from "./invoiceForm/invoiceForm-slice";
import invoicesSlice from "./invoices/invoices-slice";
import themeSlice from "./theme/theme-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    invoices: invoicesSlice.reducer,
    filter: filterSlice.reducer,
    invoiceForm: invoiceFormSlice.reducer,
  },
});

export default store;
