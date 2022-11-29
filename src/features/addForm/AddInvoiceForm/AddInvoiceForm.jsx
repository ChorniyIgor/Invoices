import { nanoid } from "@reduxjs/toolkit";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  InvoiceFormControl,
  SideFormContext,
} from "../../../components/SideFormBar/SideFormBar";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import { saveNewInvoice } from "../../invoices/invoices-slice";
import useForm from "../useForm";
import useTaskList from "../UseTaskList";
import styles from "./AddInvoiceForm.module.css";
import TaskList from "./TaskList";

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

const AddInvoiceForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(initialState);
  const FormContext = useContext(SideFormContext);

  const saveDataOnBlur = (field, evt) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        fields: { ...prevState.fields, [field]: evt.target.value },
      };
    });
  };

  const {
    streetAdressInput,
    cityInput,
    postCodeInput,
    countryInput,
    clientNameInput,
    clientEmailInput,
    clientStreetAddressInput,
    clientCityInput,
    clientPostCodeInput,
    clientCountryInput,
    invoiceDateInput,
    paymentTermsInput,
    projectDescriptionInput,
  } = useForm(saveDataOnBlur);

  const {
    addNewTaskListItemClickHandler,
    onDeleteTaskListItemClickHandler,
    onTaskListInputBlurHandler,
  } = useTaskList(setFormState);

  const onDiscardBtnClickHandler = (evt) => {
    evt.preventDefault();
    setFormState(initialState);
    FormContext.closeHandler();
  };

  const onDraftSaveBtnClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(saveNewInvoice({ ...formState, id: nanoid(6), status: "draft" }));
    setFormState(initialState);
    FormContext.closeHandler();
  };

  return (
    <form className={styles.AddInvoiceForm}>
      <h4>Bill From</h4>
      <div className={styles.AddInvoiceForm__OneRow}>
        <Input data={streetAdressInput} />
      </div>
      <div className={styles.AddInvoiceForm__TreeRows}>
        <Input data={cityInput} />
        <Input data={postCodeInput} />
        <Input data={countryInput} />
      </div>

      <h4>Bill To</h4>
      <div className={styles.AddInvoiceForm__OneRow}>
        <Input data={clientNameInput} />
        <Input data={clientEmailInput} />
        <Input data={clientStreetAddressInput} />
      </div>
      <div className={styles.AddInvoiceForm__TreeRows}>
        <Input data={clientCityInput} />
        <Input data={clientPostCodeInput} />
        <Input data={clientCountryInput} />
      </div>
      <div className={styles.AddInvoiceForm__TwoRows}>
        <Input data={invoiceDateInput} />
        <Input data={paymentTermsInput} />
      </div>
      <div className={styles.AddInvoiceForm__OneRow}>
        <Input data={projectDescriptionInput} />
      </div>
      <h3>Item List</h3>
      <TaskList
        taskList={formState.taskList}
        addNewListItemClickHandler={addNewTaskListItemClickHandler}
        onDeleteItemClickHandler={onDeleteTaskListItemClickHandler}
        onInputBlurHandler={onTaskListInputBlurHandler}
      />
      <div className={`${styles.Controls} ${InvoiceFormControl}`}>
        <Button onClick={onDiscardBtnClickHandler}>Discard</Button>
        <Button onClick={onDraftSaveBtnClickHandler}>Save as Draft</Button>
        <Button>Save & Send</Button>
      </div>
    </form>
  );
};

export default AddInvoiceForm;
