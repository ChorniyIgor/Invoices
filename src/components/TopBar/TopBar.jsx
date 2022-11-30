import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Filter from "../../features/filter/Filter/Filter";
import { invoicesSelector } from "../../features/invoices/invoices-slice";
import Button from "../../UI/Button/Button";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const navigate = useNavigate();

  const onNewInvoiceBtnClickHandler = () => {
    navigate("/addInvoice");
  };
  const totalInvoicesCount = useSelector(invoicesSelector.selectTotal);

  let totalMsg = "No invoices";
  if (totalInvoicesCount === 1) totalMsg = "There is 1 invoice";
  if (totalInvoicesCount > 1)
    totalMsg = `There are ${totalInvoicesCount} total invoices`;

  return (
    <div className={styles.TopBar}>
      <div>
        <h2>Invoices</h2>
        <h4>{totalMsg}</h4>
      </div>
      <div className={styles.TopBarControls}>
        <Filter />
        <Button view="invoice" onClick={onNewInvoiceBtnClickHandler}>
          New Invoice
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
