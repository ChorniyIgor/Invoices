import styles from "./Input.module.css";
import { nanoid } from "@reduxjs/toolkit";

const Input = ({ data }) => {
  const id = nanoid();

  let classes = [styles.InputLabel];
  if (data.wasTouched && !data.isValid) {
    classes.push(styles.Invalid);
  }
  return (
    <label htmlFor={id} className={classes.join(" ")}>
      <span>{data.label}</span>
      <input
        type="text"
        value={data.value}
        onChange={data.onInputChangeHandler}
        onBlur={data.onIputBlurHandler}
        id={id}
      />
    </label>
  );
};

export default Input;
