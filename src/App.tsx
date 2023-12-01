import styles from "./App.module.scss";
import HomePageHeading from "./pages/home/components/heading/Heading";

const App = () => {
  return (
    <div className={styles.container}>
      <HomePageHeading />
    </div>
  );
};

export default App;
