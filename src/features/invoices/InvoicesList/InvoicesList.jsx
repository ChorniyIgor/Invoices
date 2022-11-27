import { useSelector } from "react-redux";
import InvoiceItem from "../InvoiceItem/InvoiceItem";
import { getFiltratedInvoices } from "../invoices-selectors";
import styles from "./InvoicesList.module.css";

const InvoicesList = () => {
  const filratedInvoices = useSelector(getFiltratedInvoices);

  return (
    <div className={styles.InvoicesList}>
      {filratedInvoices.map((invoice) => (
        <InvoiceItem key={invoice.id} info={invoice} />
      ))}
    </div>
  );
};

export default InvoicesList;
