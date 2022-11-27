import styles from "./Select.module.css";

const Select = (props) => {
  return (
    <select
      className={styles.Select}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {props.options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
