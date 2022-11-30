import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";

import { setFilter } from "../filter-slice";
import { useRef, useState } from "react";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import { getFilterValue } from "../filter-selectors";
import Checkbox from "../../../UI/Checkbox/Checkbox";

const Filter = () => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const classes = [styles.Filter];
  if (showOptions) {
    classes.push(styles.FilterActive);
  }

  const wrapperRef = useRef(null);
  const onOutSideClickHandler = () => {
    setShowOptions(false);
  };
  useOutsideAlerter(wrapperRef, onOutSideClickHandler);

  const onFilterClickHandler = () => {
    setShowOptions((prevState) => !prevState);
  };

  const onItemClickHandler = (key, evt) => {
    dispatch(setFilter({ key, value: evt.target.checked }));
  };

  const options = useSelector(getFilterValue);

  return (
    <div className={classes.join(" ")} ref={wrapperRef}>
      <span onClick={onFilterClickHandler}>Filter by status</span>
      {showOptions && (
        <div className={styles.FilterOptions}>
          {options.map((option) => (
            <Checkbox
              key={option.key}
              id={option.key}
              checked={option.checked}
              onChange={onItemClickHandler.bind(this, option.key)}
              title={option.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
