import styles from "./DateElement.module.css";

const DateElement = ({ time }) => {
  const date = new Date(time).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return <span className={styles.Date}>{date}</span>;
};

export default DateElement;
