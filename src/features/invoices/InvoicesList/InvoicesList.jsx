import InvoiceItem from "../InvoiceItem/InvoiceItem";
import styles from "./InvoicesList.module.css";

const InvoicesList = ({ invoices }) => {
  return (
    <div className={styles.InvoicesList}>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} info={invoice} />
      ))}
    </div>
  );
};

export default InvoicesList;
