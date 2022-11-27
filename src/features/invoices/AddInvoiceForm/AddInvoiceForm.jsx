import { useInput } from "../../../hooks/useInput";
import Input from "../../../UI/Input/Input";
import styles from "./AddInvoiceForm.module.css";
import TaskList from "./TaskList";

const validate = (value) => {
  console.log("validation");
  return value.length > 4;
};

const AddInvoiceForm = () => {
  const streetAdressInput = useInput({
    validate: validate,
    label: "Street Address",
  });

  const cityInput = useInput({
    validate: validate,
    label: "City",
  });

  const postCodeInput = useInput({
    validate: validate,
    label: "Post Code",
  });

  const countryInput = useInput({
    validate: validate,
    label: "Country",
  });

  const clientNameInput = useInput({
    validate: validate,
    label: "Client’s Name",
  });

  const clientEmailInput = useInput({
    validate: validate,
    label: "Client’s Email",
  });

  const clientStreetAddressInput = useInput({
    validate: validate,
    label: "Street Address",
  });

  const clientCityInput = useInput({
    validate: validate,
    label: "City",
  });

  const clientPostCodeInput = useInput({
    validate: validate,
    label: "Post Code",
  });

  const clientCountryInput = useInput({
    validate: validate,
    label: "Country",
  });

  const invoiceDateInput = useInput({
    validate: validate,
    label: "Invoice Date",
    type: "date",
  });

  const paymentTermsInput = useInput({
    validate: validate,
    label: "Payment Terms",
    type: "select",
  });

  const projectDescriptionInput = useInput({
    validate: validate,
    label: "Project Description",
  });

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
      <TaskList />
    </form>
  );
};

export default AddInvoiceForm;
