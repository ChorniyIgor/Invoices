import DateElement from "../../../UI/DateElement/DateElement";
import TaskListBoard from "../TaskListBoard/TaskListBoard";
import styles from "./FullInvoiceInfo.module.css";

const FullInvoiceInfo = ({ invoice }) => {
  const PaymentDueDate =
    new Date(invoice.fields.invoiceDate).getTime() +
    1000 * 60 * 60 * 24 * invoice.fields.paymentTerms;

  return (
    <div className={styles.FullInvoiceInfo}>
      <div className={styles.FullInvoiceInfoHeader}>
        <div className={styles.FullInvoiceInfoHeaderId}>
          <span>
            <b>#</b>
            {invoice.id}
          </span>
          <span className={styles.FullInvoiceInfoSmall}>
            {invoice.fields.projectDescription}
          </span>
        </div>
        <div>
          <p className={styles.FullInvoiceInfoSmall}>
            {invoice.fields.streetAdress} <br />
            {invoice.fields.city}
            <br />
            {invoice.fields.postCode}
            <br />
            {invoice.fields.country}
          </p>
        </div>
      </div>
      <div className={styles.FullInvoiceInfoBody}>
        <div className={styles.FullInvoiceInfoBodyDateSection}>
          <div>
            <span className={styles.FullInvoiceInfoSmall}>Invoice Date</span>
            <span className={styles.FullInvoiceInfoMarked}>
              <DateElement time={invoice.fields.invoiceDate} />
            </span>
          </div>
          <div>
            <span className={styles.FullInvoiceInfoSmall}>Payment Due</span>
            <span className={styles.FullInvoiceInfoMarked}>
              <DateElement time={PaymentDueDate} />
            </span>
          </div>
        </div>
        <div className={styles.FullInvoiceInfoBillSection}>
          <span className={styles.FullInvoiceInfoSmall}>Bill To</span>
          <span className={styles.FullInvoiceInfoMarked}>
            {invoice.fields.clientName}
          </span>
          <p className={styles.FullInvoiceInfoSmall}>
            {invoice.fields.clientStreetAddress}
            <br />
            {invoice.fields.clientCity} <br />
            {invoice.fields.clientPostCode}
            <br />
            {invoice.fields.clientCountry}
          </p>
        </div>
        <div className={styles.FullInvoiceInfoEmailSection}>
          <span className={styles.FullInvoiceInfoSmall}>Sent to</span>
          <a
            href={"mailto:" + invoice.fields.clientEmail}
            className={styles.FullInvoiceInfoMarked}
          >
            {invoice.fields.clientEmail}
          </a>
        </div>
      </div>
      <TaskListBoard taskList={invoice.taskList} />
    </div>
  );
};

export default FullInvoiceInfo;
