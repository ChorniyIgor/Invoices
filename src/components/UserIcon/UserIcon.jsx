import userLogo from "../../assets/userLogo.png";
import styles from './UserIcon.module.css';

const UserIcon = () => {
  return (
    <div className={styles.UserIcon}>
      <img src={userLogo} alt="user logo" />
    </div>
  );
};

export default UserIcon;
