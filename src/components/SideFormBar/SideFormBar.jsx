import { createContext, useEffect, useState } from "react";
import styles from "./SideFormBar.module.css";

export const SideFormContext = createContext();

const SideFormBar = (props) => {
  const [classes, setClasses] = useState([styles.SideFormBarContainer]);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    setClasses((prevState) => [...prevState, styles.SideFormBarActive]);
  }, []);

  useEffect(() => {
    if (isBottom) {
      setClasses((prevState) => [
        ...prevState,
        styles.SideFormBarScrolledBottom,
      ]);
    } else {
      setClasses((prevState) =>
        [...prevState].filter(
          (item) => item !== styles.SideFormBarScrolledBottom
        )
      );
    }
  }, [isBottom]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setIsBottom(true);
      return;
    }

    setIsBottom(false);
  };

  const closeHandler = () => {
    setClasses((prevState) =>
      [...prevState].filter((item) => item !== styles.SideFormBarActive)
    );
    setTimeout(props.hide, 300);
  };

  return (
    <div className={classes.join(" ")}>
      <div className={styles.SideFormBarOverlay} onClick={closeHandler} />

      <div className={styles.SideFormBar}>
        <div className={styles.SideFormBarContent} onScroll={handleScroll}>
          <SideFormContext.Provider value={{ closeHandler }}>
            {props.children}
          </SideFormContext.Provider>
        </div>
      </div>
    </div>
  );
};

export const InvoiceFormControl = styles.InvoiceFormControl;
export default SideFormBar;
