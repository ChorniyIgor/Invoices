import styles from "./InvoiceItem.module.css";

const InvoiceItem = () => {
  return (
    <div className={styles.InvoiceItem}>
      <span>#RT3080</span>
      <span>Due 19 Aug 2021</span>
      <span>Jensen Huang</span>
      <span>£ 1,800.90</span>
      <span>Paid</span>
    </div>
  );
};

export default InvoiceItem;
