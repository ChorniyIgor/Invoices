import InvoiceItem from "../InvoiceItem/InvoiceItem";
import styles from "./InvoicesList.module.css";
import emptyImg from "../../../assets/empty.png";

const InvoicesList = ({ invoices }) => {
  if (invoices.length === 0) {
    return (
      <div className={styles.EmptyInvoicesList}>
        <img src={emptyImg} alt="nothing here" />
        <h3>There is nothing here</h3>
        <p>Create an invoice by clicking the </p>
        <p> New Invoice button and get started</p>
      </div>
    );
  }
  return (
    <div className={styles.InvoicesList}>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} info={invoice} />
      ))}
    </div>
  );
};

export default InvoicesList;
