import styles from "./Select.module.css";

const Select = ({ data }) => {
  return (
    <label htmlFor={data.id} className={styles.Select}>
      <span>{data.label}</span>
      <select
        className={styles.Select}
        onChange={data.onChangeHandler}
        onBlur={data.onBlurHandler}
        id={data.id}
        defaultValue={data.value}
      >
        {data.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
