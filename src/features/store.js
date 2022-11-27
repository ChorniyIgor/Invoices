import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/app-slice";
import filterSlice from "./filter/filter-slice";
import invoicesSlice from "./invoices/invoices-slice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    invoices: invoicesSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
