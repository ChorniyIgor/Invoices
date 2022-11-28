import styles from "./Button.module.css";
import addInvoiceIcon from "../../assets/+.png";

const Button = (props) => {
  let img = null;
  let btnClasses = [styles.Button];
  const type = props.type || "button";

  if (props.view === "invoice") {
    btnClasses.push(styles.ButtonWithIcon);
    img = (
      <div className={styles.Icon}>
        <img src={addInvoiceIcon} alt="new invoice" />
      </div>
    );
  }

  if (props.view === "add") {
    btnClasses.push(styles.AddBtn);
  }

  if (props.color === "default") {
    btnClasses.push(styles.DefaultColor);
  }

  if (props.color === "light") {
    btnClasses.push(styles.LightColor);
  }

  return (
    <button
      type={type}
      onClick={props.onClick}
      className={btnClasses.join(" ")}
    >
      {img}
      {props.children}
    </button>
  );
};

export default Button;
