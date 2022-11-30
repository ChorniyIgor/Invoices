import StatusLabel from "../../../components/StatusLabel/StatusLabel";
import styles from "./InvoiceItem.module.css";
import { Link } from "react-router-dom";
import { getTotalInvoicePrice } from "../invoices-selectors";
import DateElement from "../../../UI/DateElement/DateElement";

const InvoiceItem = (props) => {
  const PaymentDueDate =
    new Date(props.info.fields.invoiceDate).getTime() +
    1000 * 60 * 60 * 24 * props.info.fields.paymentTerms;

  return (
    <Link to={`invoice/${props.info.id}`}>
      <div className={styles.InvoiceItem}>
        <span className={styles.InvoiceItemId}>#{props.info.id}</span>
        <span className={styles.InvoiceItemDate}>
          Due <DateElement time={PaymentDueDate} />
        </span>
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
