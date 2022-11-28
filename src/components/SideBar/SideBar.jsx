import styles from "./SideBar.module.css";
import logo from "../../assets/logo.png";
import ThemeModSwitcher from "../../features/theme/ThemeModSwitcher/ThemeModSwitcher";
import UserIcon from "../UserIcon/UserIcon";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <Link to="/">
        <img className={styles.Logo} src={logo} alt="Invoice logo" />
      </Link>

      <div className={styles.SideBarContent}>
        <ThemeModSwitcher />
        <UserIcon />
      </div>
    </div>
  );
};

export default SideBar;
