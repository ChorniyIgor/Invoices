import styles from "./Input.module.css";

const Input = ({ data, onChange, onBlur }) => {
  let classes = [styles.InputLabel];
  if (data.wasTouched && !data.isValid) {
    classes.push(styles.Invalid);
  }

  const onChangeHandler = (evt) => {
    data.onInputChangeHandler(evt);
    if (onChange) onChange(evt);
  };

  const onBlurHandler = (evt) => {
    data.onIputBlurHandler(evt);
    if (onBlur) onBlur(evt);
  };

  return (
    <label htmlFor={data.id} className={classes.join(" ")}>
      <span>{data.label}</span>
      <input
        type={data.type}
        value={data.value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        id={data.id}
        ref={data.ref || null}
      />
    </label>
  );
};

export default Input;
