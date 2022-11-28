import { useState } from "react";
import styles from "./SideFormBar.module.css";

const SideFormBar = (props) => {
  const classes = [styles.SideFormBarContainer];
  const [isBottom, setIsBottom] = useState(false);

  if (props.visability) {
    classes.push(styles.SideFormBarActive);
  }

  if (isBottom) {
    classes.push(styles.SideFormBarScrolledBottom);
  }

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setIsBottom(true);
      return;
    }

    setIsBottom(false);
  };

  return (
    <div className={classes.join(" ")}>
      <div className={styles.SideFormBarOverlay} onClick={props.hide} />

      <div className={styles.SideFormBar}>
        <h2>{props.title}</h2>
        {props.visability && (
          <div className={styles.SideFormBarContent} onScroll={handleScroll}>
            {props.children}
          </div>
        )}
      </div>
    </div>
  );
};

export const InvoiceFormControl = styles.InvoiceFormControl;
export default SideFormBar;
