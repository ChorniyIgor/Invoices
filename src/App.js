import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import DashBoard from "./components/DashboardContainer/DashboardContainer";
import { useEffect } from "react";
import { loadInvoices } from "./features/invoices/invoices-slice";
import { useDispatch, useSelector } from "react-redux";
import SideFormBar from "./components/SideFormBar/SideFormBar";
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
];

const App = () => {
  const dispatch = useDispatch();
  const filratedInvoices = useSelector(getFiltratedInvoices);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadInvoices(DAMMY));
  }, [dispatch]);

  const addInvoiceFormCloseHandler = () => {
    navigate(-1);
    //dispatch(hideAddInvoiceForm());
  };

  // const editInvoiceFormCloseHandler = () => {
  //   dispatch(hideEditInvoiceForm());
  // };

  return (
    <>
      <div className={styles.App}>
        <SideBar />

        <Routes>
          <Route
            path="/addInvoice"
            element={
              <>
                <SideFormBar
                  hide={addInvoiceFormCloseHandler}
                  title="New Invoice"
                >
                  <AddInvoiceForm />
                </SideFormBar>
                <DashBoard>
                  <TopBar />
                  <InvoicesList invoices={filratedInvoices} />
                </DashBoard>
              </>
            }
          />

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

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
