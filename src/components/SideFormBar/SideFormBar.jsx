import styles from "./SideFormBar.module.css";

const SideFormBar = (props) => {
  let classes = [styles.SideFormBarContainer];
  if (props.visability) {
    classes.push(styles.SideFormBarActive);
  }

  return (
    <div className={classes.join(" ")}>
      <div className={styles.SideFormBarOverlay} onClick={props.hide} />
      <div className={styles.SideFormBar}>
        <h2>New Invoice</h2>
        <div className={styles.SideFormBarContent}>{props.children}</div>
      </div>
    </div>
  );
};

export default SideFormBar;
