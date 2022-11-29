import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: {
    streetAdress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    invoiceDate: "",
    paymentTerms: "",
    projectDescription: "",
  },
  taskList: [],
};

const invoiceFormSlice = createSlice({
  name: "@@addForm",
  initialState,
  reducers: {
    saveNewFormValue: (state, action) => {
      state.fields[action.payload.field] = action.payload.value;
    },
    saveUpdatedTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    discardForm: () => initialState,
  },
});

export const { saveUpdatedTaskList, saveNewFormValue, discardForm } =
  invoiceFormSlice.actions;

export const getAddFormFields = (state) => state.invoiceForm.fields;
export const getAddFormList = (state) => state.invoiceForm.taskList;

export default invoiceFormSlice;
