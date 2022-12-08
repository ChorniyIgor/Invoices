import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import SideFormBar from "./components/SideFormBar/SideFormBar";
import InvoiceForm from "./features/invoiceForm/InvoiceForm/InvoiceForm";
import InvoicePage from "./components/InvoicePage/InvoicePage";
import MainPage from "./components/MainPage/MainPage";
import useThemeMode from "./features/theme/useThemeMode";
import useDemoDataLoad from "./hooks/useDemoDataLoad";

const App = () => {
  const navigate = useNavigate();

  const invoiceFormCloseHandler = () => {
    navigate(-1);
  };

  useDemoDataLoad();
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
