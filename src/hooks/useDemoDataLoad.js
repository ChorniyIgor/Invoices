import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadInvoices } from "../features/invoices/invoices-slice";

const DAMMY = [
  {
    id: "RT3080",
    status: "pending",
    fields: {
      streetAdress: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
      clientName: "Jensen Huang",
      clientEmail: "alexgrim@mail.com",
      clientStreetAddress: "84 Church Way",
      clientCity: "Bradford",
      clientPostCode: "BD1 9PB",
      clientCountry: "United Kingdom",
      invoiceDate: "2022-11-13",
      paymentTerms: 30,
      projectDescription: "Graphic Design",
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
  },
  {
    id: "XM9141",
    status: "paid",
    fields: {
      streetAdress: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
      clientName: "Jensen Huang",
      clientEmail: "alexgrim@mail.com",
      clientStreetAddress: "84 Church Way",
      clientCity: "Bradford",
      clientPostCode: "BD1 9PB",
      clientCountry: "United Kingdom",
      invoiceDate: "2022-11-13",
      paymentTerms: 7,
      projectDescription: "Graphic Design",
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
  },
  {
    id: "RT2080",
    status: "draft",
    fields: {
      streetAdress: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
      clientName: "Jensen Huang",
      clientEmail: "alexgrim@mail.com",
      clientStreetAddress: "84 Church Way",
      clientCity: "Bradford",
      clientPostCode: "BD1 9PB",
      clientCountry: "United Kingdom",
      invoiceDate: "2022-11-13",
      paymentTerms: 30,
      projectDescription: "Graphic Design",
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
  },
];

const useDemoDataLoad = () => {
  const storage = !!localStorage.getItem("persist:root");

  const dispatch = useDispatch();
  useEffect(() => {
    if (!storage) {
      dispatch(loadInvoices(DAMMY));
    }
  }, [dispatch, storage]);
};

export default useDemoDataLoad;
