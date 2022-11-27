import icon from "../../../assets/themeIcon.png";
import styles from "./ThemeModSwitcher.module.css";

const ThemeModSwitcher = () => {
  return (
    <div className={styles.ThemeModSwitcher}>
      <img src={icon} alt="Theme switch" />
    </div>
  );
};

export default ThemeModSwitcher;
