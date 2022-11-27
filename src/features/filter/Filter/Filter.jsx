import { useDispatch } from "react-redux";
import Select from "../../../UI/Select/Select";

import { setFilter } from "../filter-slice";

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChangeHandler = (evt) => {
    dispatch(setFilter(evt.target.value));
  };

  const options = [
    { key: "all", title: "All" },
    { key: "paid", title: "Paid" },
    { key: "pending", title: "Pending" },
    { key: "draft", title: "Draft" },
  ];

  return (
    <Select
      onChange={onFilterChangeHandler}
      options={options}
      defaultValue="all"
    />
  );
};

export default Filter;
