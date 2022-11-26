import InvoicesList from "../../features/invoices/InvoicesList/InvoicesList";
import TopBar from "../TopBar/TopBar";
import styles from "./DashBoard.module.css";

const DashBoard = () => {
  return (
    <div className={styles.DashBoard}>
      <TopBar />
      <InvoicesList />
    </div>
  );
};

export default DashBoard;
