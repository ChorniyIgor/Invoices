import styles from "./DashboardContainer.module.css";

const DashBoard = ({ children }) => {
  return <div className={styles.DashboardContainer}>{children}</div>;
};

export default DashBoard;
