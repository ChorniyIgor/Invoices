import { useDispatch } from "react-redux";
import { switchTheme } from "../theme-slice";
import styles from "./ThemeModSwitcher.module.css";
import useThemeIcon from "../useThemeIcon";

const ThemeModSwitcher = () => {
  const dispatch = useDispatch();

  const onThemeSwithcerClickHandler = () => {
    dispatch(switchTheme());
  };

  return (
    <div
      className={styles.ThemeModSwitcher}
      onClick={onThemeSwithcerClickHandler}
    >
      <img src={useThemeIcon()} alt="Theme switch" />
    </div>
  );
};

export default ThemeModSwitcher;
