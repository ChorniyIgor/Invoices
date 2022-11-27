import { getFilterValue } from "../filter/filter-selectors";
import { invoicesSelector } from "./invoices-slice";

export const getFiltratedInvoices = (state) => {
  const allInvoices = invoicesSelector.selectAll(state);
  const filter = getFilterValue(state);

  if (filter === "all") return allInvoices;

  return allInvoices.filter((invoice) => invoice.status === filter);
};
