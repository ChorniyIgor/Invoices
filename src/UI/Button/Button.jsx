import styles from "./Button.module.css";
import addInvoiceIcon from "../../assets/+.png";

const Button = (props) => {
  let img = null;
  let btnClasses = [styles.Button];

  if (props.type === "invoice") {
    btnClasses.push(styles.ButtonWithIcon);
    img = (
      <div className={styles.Icon}>
        <img src={addInvoiceIcon} alt="new invoice" />
      </div>
    );
  }

  if (props.color === "default") {
    btnClasses.push(styles.DefaultColor);
  }

  return (
    <button onClick={props.onClick} className={btnClasses.join(" ")}>
      {img}
      {props.children}
    </button>
  );
};

export default Button;
