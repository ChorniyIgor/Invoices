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
  taskList: [
    {
      name: "Banner Design",
      qty: 1,
      price: 200,
      id: 1,
    },
    {
      name: "Banner Design 2",
      qty: 2,
      price: 220,
      id: 2,
    },
  ],
};

const addFormSlice = createSlice({
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
  addFormSlice.actions;

export const getAddFormFields = (state) => state.addForm.fields;
export const getAddFormList = (state) => state.addForm.taskList;

export default addFormSlice;
