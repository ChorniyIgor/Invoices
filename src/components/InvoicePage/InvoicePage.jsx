import { useSelector } from "react-redux";
import styles from "./InvoicePage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ShortInvoicesItem from "../../features/invoices/ShortInvoicesItem/ShortInvoicesItem";
import FullInvoiceInfo from "../../features/invoices/FullInvoiceInfo/FullInvoiceInfo";

import { invoicesSelector } from "../../features/invoices/invoices-slice";

const InvoicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const invoice = useSelector((state) =>
    invoicesSelector.selectById(state, id)
  );

  const onBackClickHandrer = () => {
    navigate(-1);
  };

  if (!invoice) return null;

  return (
    <div className={styles.InvoicePage}>
      <button
        onClick={onBackClickHandrer}
        className={styles.InvoicePageBackBtn}
      >
        Go back
      </button>
      <ShortInvoicesItem status={invoice.status} id={invoice.id} />
      <FullInvoiceInfo invoice={invoice} />
    </div>
  );
};

export default InvoicePage;
