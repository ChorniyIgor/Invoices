import StatusLabel from "../../../components/StatusLabel/StatusLabel";
import styles from "./InvoiceItem.module.css";
import { Link } from "react-router-dom";
import { getTotalInvoicePrice } from "../invoices-selectors";

const InvoiceItem = (props) => {
  const date = new Date(props.info.fields.invoiceDate).toLocaleDateString(
    "en-us",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <Link to={`invoice/${props.info.id}`}>
      <div className={styles.InvoiceItem}>
        <span className={styles.InvoiceItemId}>#{props.info.id}</span>
        <span className={styles.InvoiceItemDate}>Due {date}</span>
        <span className={styles.InvoiceItemName}>
          {props.info.fields.clientName}
        </span>
        <span className={styles.InvoiceItemPrice}>
          £ {getTotalInvoicePrice(props.info.taskList)}
        </span>
        <StatusLabel status={props.info.status} />
      </div>
    </Link>
  );
};

export default InvoiceItem;
