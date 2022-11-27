import StatusLabel from "../../../components/StatusLabel/StatusLabel";
import styles from "./InvoiceItem.module.css";

const InvoiceItem = (props) => {
  const date = new Date(props.info.date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className={styles.InvoiceItem}>
      <span className={styles.InvoiceItemId}>#{props.info.id}</span>
      <span className={styles.InvoiceItemDate}>Due {date}</span>
      <span className={styles.InvoiceItemName}>{props.info.name}</span>
      <span className={styles.InvoiceItemPrice}>£ {props.info.amount}</span>
      <StatusLabel status={props.info.status} />
    </div>
  );
};

export default InvoiceItem;
