import { nanoid } from "@reduxjs/toolkit";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  InvoiceFormControl,
  SideFormContext,
} from "../../../components/SideFormBar/SideFormBar";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import {
  editInvoice,
  invoicesSelector,
  saveNewInvoice,
} from "../../invoices/invoices-slice";
import useForm from "../useForm";
import useTaskList from "../UseTaskList";
import styles from "./InvoiceForm.module.css";
import TaskList from "./TaskList";
import Select from "../../../UI/Select/Select";
import { formInitialState } from "../invoiceForm-slice";

const AddInvoiceForm = () => {
  const dispatch = useDispatch();

  const { id: invoiceId } = useParams();

  const invoice = useSelector((state) =>
    invoicesSelector.selectById(state, invoiceId)
  );

  const [formState, setFormState] = useState(invoice || formInitialState);
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
    paymentTermsSelect,
    projectDescriptionInput,
  } = useForm(formState, saveDataOnBlur);

  const {
    addNewTaskListItemClickHandler,
    onDeleteTaskListItemClickHandler,
    onTaskListInputBlurHandler,
  } = useTaskList(setFormState);

  const onDiscardBtnClickHandler = (evt) => {
    evt.preventDefault();
    setFormState(formInitialState);
    FormContext.closeHandler();
  };

  const onDraftSaveBtnClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(saveNewInvoice({ ...formState, id: nanoid(6), status: "draft" }));
    setFormState(formInitialState);
    FormContext.closeHandler();
  };

  const onSaveBtnClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(
      saveNewInvoice({ ...formState, id: nanoid(6), status: "pending" })
    );
    setFormState(formInitialState);
    FormContext.closeHandler();
  };

  const onSaveEditsBtnClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(editInvoice({ ...formState }));
    setFormState(formInitialState);
    FormContext.closeHandler();
  };

  return (
    <>
      <h2 className={styles.AddInvoiceFormTitle}>
        {invoiceId ? `Edit #${invoiceId}` : "New Invoice"}
      </h2>

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
          <Select data={paymentTermsSelect} />
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
          {!invoiceId && (
            <>
              <div className={styles.ControlsLeftBtn}>
                <Button onClick={onDiscardBtnClickHandler} color="default">
                  Discard
                </Button>
              </div>
              <Button onClick={onDraftSaveBtnClickHandler} color="grey">
                Save as Draft
              </Button>
              <Button onClick={onSaveBtnClickHandler} color="active">
                Save & Send
              </Button>
            </>
          )}
          {invoiceId && (
            <>
              <Button onClick={onDiscardBtnClickHandler} color="default">
                Cancel
              </Button>
              <Button onClick={onSaveEditsBtnClickHandler} color="active">
                Save Changes
              </Button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default AddInvoiceForm;
