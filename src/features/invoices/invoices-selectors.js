import { invoicesSelector } from "./invoices-slice";

export const getFiltratedInvoices = (state, filterParams) => {
  const allInvoices = invoicesSelector.selectAll(state);

  let filterValues = filterParams.filter((item) => item.checked);
  filterValues = filterValues.map((item) => item.key);

  if (filterValues.includes("all")) return allInvoices;

  return allInvoices.filter((invoice) => filterValues.includes(invoice.status));
};

export const getTotalInvoicePrice = (taskList) => {
  const initialValue = 0;
  return taskList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.qty * currentValue.price,
    initialValue
  );
};
