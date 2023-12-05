import { useEffect } from "react";
import styles from "./App.module.scss";
import HomePageGrid from "./pages/home/components/grid/Grid";
import HomePageSearch from "./pages/home/components/search/Search";
import { fetchCrafts } from "./services/craft-services";

const App = () => {
  useEffect(() => {
    fetchCrafts().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <HomePageSearch />
      <HomePageGrid />
    </div>
  );
};

export default App;
