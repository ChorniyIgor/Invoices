import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.TopBar}>
      <div>
        <h2>Invoices</h2>
        <h4>There are 7 total invoices</h4>
      </div>
      <div>
        <h2>Filter</h2>
        <button>New Invoice</button>
      </div>
    </div>
  );
};

export default TopBar;
