import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getFilterValue } from "../../features/filter/filter-selectors";
import { getFiltratedInvoices } from "../../features/invoices/invoices-selectors";
import InvoicesList from "../../features/invoices/InvoicesList/InvoicesList";
import DashBoard from "../DashboardContainer/DashboardContainer";
import TopBar from "../TopBar/TopBar";

const MainPage = () => {
  const filter = useSelector(getFilterValue);

  const filratedInvoices = useSelector((state) =>
    getFiltratedInvoices(state, filter)
  );

  return (
    <>
      <Outlet />
      <DashBoard>
        <TopBar />
        <InvoicesList invoices={filratedInvoices} />
      </DashBoard>
    </>
  );
};

export default MainPage;
