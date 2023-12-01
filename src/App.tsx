import styles from "./App.module.scss";
import HomePageSearch from "./pages/home/components/search/Search";

const App = () => {
  return (
    <div className={styles.container}>
      <HomePageSearch />
    </div>
  );
};

export default App;
