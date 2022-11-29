import { useSelector } from "react-redux";
import styles from "./InvoicePage.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ShortInvoicesItem from "../../features/invoices/ShortInvoicesItem/ShortInvoicesItem";
import FullInvoiceInfo from "../../features/invoices/FullInvoiceInfo/FullInvoiceInfo";

import { invoicesSelector } from "../../features/invoices/invoices-slice";
// import InvoicesList from "../../features/invoices/InvoicesList/InvoicesList";

const InvoicePage = () => {
  const { id } = useParams();
  const invoice = useSelector((state) =>
    invoicesSelector.selectById(state, id)
  );
  console.log(invoice);

  return (
    <div className={styles.InvoicePage}>
      <Link to="/" className={styles.InvoicePageBackBtn}>
        Go back
      </Link>
      <ShortInvoicesItem status={invoice.status} id={invoice.id} />
      <FullInvoiceInfo invoice={invoice} />
    </div>
  );
};

export default InvoicePage;
