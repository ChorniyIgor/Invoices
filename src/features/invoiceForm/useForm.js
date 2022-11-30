import { useInput } from "../../hooks/useInput";
import { useSelect } from "../../hooks/useSelect";
const validate = (value) => {
  return value.length > 1;
};

const useForm = (invoice, onInputBlurHandler) => {
  const streetAdressInput = useInput({
    validate: validate,
    initialValue: invoice.fields.streetAdress,
    label: "Street Address",
    onblur: onInputBlurHandler.bind(null, "streetAdress"),
  });

  const cityInput = useInput({
    validate: validate,
    initialValue: invoice.fields.city,
    label: "City",
    onblur: onInputBlurHandler.bind(null, "city"),
  });

  const postCodeInput = useInput({
    validate: validate,
    initialValue: invoice.fields.postCode,
    label: "Post Code",
    onblur: onInputBlurHandler.bind(null, "postCode"),
  });

  const countryInput = useInput({
    validate: validate,
    initialValue: invoice.fields.country,
    label: "Country",
    onblur: onInputBlurHandler.bind(null, "country"),
  });

  const clientNameInput = useInput({
    validate: validate,
    initialValue: invoice.fields.clientName,
    label: "Client’s Name",
    onblur: onInputBlurHandler.bind(null, "clientName"),
  });

  const clientEmailInput = useInput({
    validate: validate,
    initialValue: invoice.fields.clientEmail,
    label: "Client’s Email",
    onblur: onInputBlurHandler.bind(null, "clientEmail"),
  });

  const clientStreetAddressInput = useInput({
    validate: validate,
    initialValue: invoice.fields.clientStreetAddress,
    label: "Street Address",
    onblur: onInputBlurHandler.bind(null, "clientStreetAddress"),
  });

  const clientCityInput = useInput({
    validate: validate,
    initialValue: invoice.fields.clientCity,
    label: "City",
    onblur: onInputBlurHandler.bind(null, "clientCity"),
  });

  const clientPostCodeInput = useInput({
    validate: validate,
    initialValue: invoice.fields.clientPostCode,
    label: "Post Code",
    onblur: onInputBlurHandler.bind(null, "clientPostCode"),
  });

  const clientCountryInput = useInput({
    validate: validate,
    initialValue: invoice.fields.clientCountry,
    label: "Country",
    onblur: onInputBlurHandler.bind(null, "clientCountry"),
  });

  const invoiceDateInput = useInput({
    validate: validate,
    initialValue: invoice.fields.invoiceDate,
    label: "Invoice Date",
    type: "date",
    onblur: onInputBlurHandler.bind(null, "invoiceDate"),
  });

  const paymentTermsSelect = useSelect({
    options: [
      { title: "Next 7 Days", value: 7 },
      { title: "Next 30 Days", value: 30 },
      { title: "Next 3 Month", value: 90 },
      { title: "Next Year", value: 365 },
    ],
    initialValue: invoice.fields.paymentTerms,
    label: "Payment Terms",
    onblur: onInputBlurHandler.bind(null, "paymentTerms"),
  });

  const projectDescriptionInput = useInput({
    validate: validate,
    initialValue: invoice.fields.projectDescription,
    label: "Project Description",
    onblur: onInputBlurHandler.bind(null, "projectDescription"),
  });

  return {
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
  };
};

export default useForm;
