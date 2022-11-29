import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashboardContainer/DashboardContainer";
import { useEffect } from "react";
import { loadInvoices } from "./features/invoices/invoices-slice";
import { useDispatch, useSelector } from "react-redux";
import SideFormBar from "./components/SideFormBar/SideFormBar";
import { getAddInvoiceFormVisability } from "./features/app/app-selectors";
import { hideAddInvoiceForm } from "./features/app/app-slice";
import AddInvoiceForm from "./features/addForm/AddInvoiceForm/AddInvoiceForm";
import InvoicePage from "./components/InvoicePage/InvoicePage";
import TopBar from "./components/TopBar/TopBar";
import InvoicesList from "./features/invoices/InvoicesList/InvoicesList";
import { getFiltratedInvoices } from "./features/invoices/invoices-selectors";

const DAMMY = [
  {
    id: 1,
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
      invoiceDate: 1669631850843,
      paymentTerms: 1669631850843,
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
  // {
  //   id: 1,
  //   date: 1669474455322,
  //   name: "Jensen Huang",
  //   amount: 1800.9,
  //   status: "paid",
  // },
  // {
  //   id: 2,
  //   date: 1669474455322,
  //   name: "Jensen Huang 2",
  //   amount: 2800.9,
  //   status: "pending",
  // },
  // {
  //   id: 3,
  //   date: 1669474455322,
  //   name: "Jensen Huang 2",
  //   amount: 1300.9,
  //   status: "draft",
  // },
];

const App = () => {
  const dispatch = useDispatch();
  const addInvoiceFormVisability = useSelector(getAddInvoiceFormVisability);
  const filratedInvoices = useSelector(getFiltratedInvoices);

  useEffect(() => {
    dispatch(loadInvoices(DAMMY));
  }, [dispatch]);

  const addInvoiceFormCloseHandler = () => {
    dispatch(hideAddInvoiceForm());
  };

  // const editInvoiceFormCloseHandler = () => {
  //   dispatch(hideEditInvoiceForm());
  // };

  return (
    <>
      <div className={styles.App}>
        <SideBar />
        <SideFormBar
          visability={addInvoiceFormVisability}
          hide={addInvoiceFormCloseHandler}
          title="New Invoice"
        >
          <AddInvoiceForm />
        </SideFormBar>
        <Routes>
          <Route
            path="/"
            element={
              <DashBoard>
                <TopBar />
                <InvoicesList invoices={filratedInvoices} />
              </DashBoard>
            }
          />
          <Route
            path="/invoice/:id"
            element={
              <DashBoard>
                <InvoicePage />
              </DashBoard>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
