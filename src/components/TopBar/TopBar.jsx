import { useDispatch } from "react-redux";
import { showAddInvoiceForm } from "../../features/app/app-slice";
import Filter from "../../features/filter/Filter/Filter";
import Button from "../../UI/Button/Button";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const dispatch = useDispatch();
  const onNewInvoiceBtnClickHandler = () => {
    dispatch(showAddInvoiceForm());
  };
  return (
    <div className={styles.TopBar}>
      <div>
        <h2>Invoices</h2>
        <h4>There are 7 total invoices</h4>
      </div>
      <div className={styles.TopBarControls}>
        <Filter />
        <Button
          type="invoice"
          color="default"
          onClick={onNewInvoiceBtnClickHandler}
        >
          New Invoice
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
