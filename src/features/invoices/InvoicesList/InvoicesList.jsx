import InvoiceItem from "../InvoiceItem/InvoiceItem";
import styles from "./InvoicesList.module.css";

const InvoicesList = () => {
  return (
    <div className={styles.InvoicesList}>
      <InvoiceItem />
      <InvoiceItem />
      <InvoiceItem />
      <InvoiceItem />
    </div>
  );
};

export default InvoicesList;
