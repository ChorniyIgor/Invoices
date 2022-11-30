import { createSlice } from "@reduxjs/toolkit";

export const formInitialState = {
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
    paymentTerms: "7",
    projectDescription: "",
  },
  taskList: [],
};

const invoiceFormSlice = createSlice({
  name: "@@addForm",
  initialState: formInitialState,
  reducers: {
    saveNewFormValue: (state, action) => {
      state.fields[action.payload.field] = action.payload.value;
    },
    saveUpdatedTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    discardForm: () => formInitialState,
  },
});

export const { saveUpdatedTaskList, saveNewFormValue, discardForm } =
  invoiceFormSlice.actions;

export const getAddFormFields = (state) => state.invoiceForm.fields;
export const getAddFormList = (state) => state.invoiceForm.taskList;

export default invoiceFormSlice;
