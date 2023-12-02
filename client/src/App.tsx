import styles from "./App.module.scss";
import HomePageGrid from "./pages/home/components/grid/Grid";
import HomePageSearch from "./pages/home/components/search/Search";

const App = () => {
  return (
    <div className={styles.container}>
      <HomePageSearch />
      <HomePageGrid />
    </div>
  );
};

export default App;
