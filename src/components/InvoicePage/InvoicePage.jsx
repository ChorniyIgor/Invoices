// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { invoicesSelector } from "../../features/invoices/invoices-slice";
// import InvoicesList from "../../features/invoices/InvoicesList/InvoicesList";

const InvoicePage = () => {
  const { id } = useParams();
  // const invoice = useSelector((state) =>
  //   invoicesSelector.selectById(state, id)
  // );

  return <div>{id}</div>;
};

export default InvoicePage;
