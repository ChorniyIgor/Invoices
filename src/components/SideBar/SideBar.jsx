import styles from "./SideBar.module.css";
import logo from "../../assets/logo.png";
import ThemeModSwitcher from "../../features/theme/ThemeModSwitcher/ThemeModSwitcher";
import UserIcon from "../UserIcon/UserIcon";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <img className={styles.Logo} src={logo} alt="Invoice logo" />
      <div className={styles.SideBarContent}>
        <ThemeModSwitcher />
        <UserIcon />
      </div>
    </div>
  );
};

export default SideBar;
