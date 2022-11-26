import DashBoard from "./components/DashBoard/DashBoard";
import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <SideBar />
      <DashBoard />
    </div>
  );
};

export default App;
