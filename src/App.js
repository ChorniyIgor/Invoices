import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import DashBoard from "./components/Dashboard/DashBoard";
import { useEffect } from "react";
import { loadInvoices } from "./features/invoices/invoices-slice";
import { useDispatch, useSelector } from "react-redux";
import SideFormBar from "./components/SideFormBar/SideFormBar";
import {
  getAddInvoiceFormVisability,
  getEditInvoiceFormVisability,
} from "./features/app/app-selectors";
import {
  hideAddInvoiceForm,
  hideEditInvoiceForm,
} from "./features/app/app-slice";
import AddInvoiceForm from "./features/invoices/AddInvoiceForm/AddInvoiceForm";

const DAMMY = [
  {
    id: 1,
    date: 1669474455322,
    name: "Jensen Huang",
    amount: 1800.9,
    status: "paid",
  },
  {
    id: 2,
    date: 1669474455322,
    name: "Jensen Huang 2",
    amount: 2800.9,
    status: "pending",
  },
  {
    id: 3,
    date: 1669474455322,
    name: "Jensen Huang 2",
    amount: 1300.9,
    status: "draft",
  },
];

const App = () => {
  const dispatch = useDispatch();
  const addInvoiceFormVisability = useSelector(getAddInvoiceFormVisability);
  const editInvoiceFormVisability = useSelector(getEditInvoiceFormVisability);

  useEffect(() => {
    dispatch(loadInvoices(DAMMY));
  }, [dispatch]);

  const addInvoiceFormCloseHandler = () => {
    dispatch(hideAddInvoiceForm());
  };

  const editInvoiceFormCloseHandler = () => {
    dispatch(hideEditInvoiceForm());
  };

  return (
    <div className={styles.App}>
      <SideBar />
      <SideFormBar
        visability={addInvoiceFormVisability}
        hide={addInvoiceFormCloseHandler}
      >
        <AddInvoiceForm />
      </SideFormBar>

      <SideFormBar
        visability={editInvoiceFormVisability}
        hide={editInvoiceFormCloseHandler}
      >
        edit Invoice form
      </SideFormBar>
      <DashBoard />
    </div>
  );
};

export default App;
