import { configureStore } from "@reduxjs/toolkit";
import addFormSlice from "./addForm/addForm-slice";
import appSlice from "./app/app-slice";
import filterSlice from "./filter/filter-slice";
import invoicesSlice from "./invoices/invoices-slice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    invoices: invoicesSlice.reducer,
    filter: filterSlice.reducer,
    addForm: addFormSlice.reducer,
  },
});

export default store;
