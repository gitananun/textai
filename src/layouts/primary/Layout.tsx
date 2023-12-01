import styles from "./Layout.module.scss";
import BackgroundImage from "@assets/background.png";
import LayoutNavbar from "../components/navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = (props: Props) => {
  const { children } = props;

  return (
    <main
      className={styles.container}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <LayoutNavbar />
      {children}
    </main>
  );
};

export default PrimaryLayout;
