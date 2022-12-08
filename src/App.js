import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { loadInvoices } from "./features/invoices/invoices-slice";
import { useDispatch } from "react-redux";
import SideFormBar from "./components/SideFormBar/SideFormBar";
import InvoiceForm from "./features/invoiceForm/InvoiceForm/InvoiceForm";
import InvoicePage from "./components/InvoicePage/InvoicePage";
import MainPage from "./components/MainPage/MainPage";
import useThemeMode from "./features/theme/useThemeMode";

const DAMMY = [
  {
    id: "kj54po",
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
    id: "k434po",
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
    id: "kj56ro",
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

const App = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadInvoices(DAMMY));
  }, [dispatch]);

  const invoiceFormCloseHandler = () => {
    navigate(-1);
  };

  useThemeMode();

  return (
    <>
      <div className={styles.App}>
        <SideBar />

        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route
              path="addInvoice"
              element={
                <SideFormBar hide={invoiceFormCloseHandler}>
                  <InvoiceForm />
                </SideFormBar>
              }
            />
          </Route>

          <Route path="/invoice/:id" element={<InvoicePage />}>
            <Route
              path="edit"
              element={
                <SideFormBar hide={invoiceFormCloseHandler}>
                  <InvoiceForm />
                </SideFormBar>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
