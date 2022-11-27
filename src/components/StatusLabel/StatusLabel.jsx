import styles from "./StatusLabel.module.css";

const StatusLabel = (props) => {
  let text = "";
  let classes = [styles.StatusLabel];

  if (props.status === "paid") {
    text = "Paid";
    classes.push(styles.StatusLabelPaid);
  }

  if (props.status === "pending") {
    text = "Pending";
    classes.push(styles.StatusLabelPending);
  }

  if (props.status === "draft") {
    text = "Draft";
    classes.push(styles.StatusLabelDraft);
  }

  return <div className={classes.join(" ")}>{text}</div>;
};

export default StatusLabel;
