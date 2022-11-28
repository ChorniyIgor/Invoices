import { useInput } from "../../hooks/useInput";
const validate = (value) => {
  return value.length > 1;
};

const useForm = (onInputBlurHandler) => {
  const streetAdressInput = useInput({
    validate: validate,
    label: "Street Address",
    onblur: onInputBlurHandler.bind(null, "streetAdress"),
  });

  const cityInput = useInput({
    validate: validate,
    label: "City",
    onblur: onInputBlurHandler.bind(null, "city"),
  });

  const postCodeInput = useInput({
    validate: validate,
    label: "Post Code",
    onblur: onInputBlurHandler.bind(null, "postCode"),
  });

  const countryInput = useInput({
    validate: validate,
    label: "Country",
    onblur: onInputBlurHandler.bind(null, "country"),
  });

  const clientNameInput = useInput({
    validate: validate,
    label: "Client’s Name",
    onblur: onInputBlurHandler.bind(null, "clientName"),
  });

  const clientEmailInput = useInput({
    validate: validate,
    label: "Client’s Email",
    onblur: onInputBlurHandler.bind(null, "clientEmail"),
  });

  const clientStreetAddressInput = useInput({
    validate: validate,
    label: "Street Address",
    onblur: onInputBlurHandler.bind(null, "clientStreetAddress"),
  });

  const clientCityInput = useInput({
    validate: validate,
    label: "City",
    onblur: onInputBlurHandler.bind(null, "clientCity"),
  });

  const clientPostCodeInput = useInput({
    validate: validate,
    label: "Post Code",
    onblur: onInputBlurHandler.bind(null, "clientPostCode"),
  });

  const clientCountryInput = useInput({
    validate: validate,
    label: "Country",
    onblur: onInputBlurHandler.bind(null, "clientCountry"),
  });

  const invoiceDateInput = useInput({
    validate: validate,
    label: "Invoice Date",
    type: "date",
    onblur: onInputBlurHandler.bind(null, "invoiceDate"),
  });

  const paymentTermsInput = useInput({
    validate: validate,
    label: "Payment Terms",
    type: "select",
    onblur: onInputBlurHandler.bind(null, "paymentTerms"),
  });

  const projectDescriptionInput = useInput({
    validate: validate,
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
    paymentTermsInput,
    projectDescriptionInput,
  };
};

export default useForm;
