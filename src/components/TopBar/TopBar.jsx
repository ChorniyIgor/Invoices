import { useNavigate } from "react-router-dom";
import Filter from "../../features/filter/Filter/Filter";
import Button from "../../UI/Button/Button";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const navigate = useNavigate();

  const onNewInvoiceBtnClickHandler = () => {
    navigate("/addInvoice");
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
          view="invoice"
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
