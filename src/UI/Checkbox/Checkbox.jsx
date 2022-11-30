import styles from "./Checkbox.module.css";

const Checkbox = ({ checked, onChange, id, title }) => {
  const classes = [styles.Checkbox];

  if (checked) {
    classes.push(styles.CheckboxActive);
  }

  return (
    <label htmlFor={id} className={styles.CheckboxLabel}>
      <div className={styles.CheckboxMainContainer}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <div className={classes.join(" ")}>
          <div className={styles.CheckboxContainer}>
            <div className={styles.Checked}></div>
          </div>
        </div>
      </div>
      <span className={styles.CheckboxTitle}>{title}</span>
    </label>
  );
};

export default Checkbox;
