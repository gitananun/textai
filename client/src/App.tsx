import { useEffect } from "react";
import styles from "./App.module.scss";
import HomePageGrid from "./pages/home/components/grid/Grid";
import HomePageSearch from "./pages/home/components/search/Search";
import { dispatchFetchCraftsAction } from "@store/crafts/actions";

const App = () => {
  useEffect(() => {
    dispatchFetchCraftsAction();
  }, []);

  return (
    <div className={styles.container}>
      <HomePageSearch />
      <HomePageGrid />
    </div>
  );
};

export default App;
