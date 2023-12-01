import styles from "./Search.module.scss";
import Logo from "@assets/logo.png";
import { BRAND_NAME } from "@/config/public";
import HomeSearchInput from "./input/Input";
import CustomButton from "@/components/custom-button/CustomButton";

const HomePageSearch = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt={BRAND_NAME} className={styles.logo} />
      <span className={styles.badge}>Try the Next-Gen Text to Image API</span>
      <HomeSearchInput name="search" placeholder="Drop your idea here..." />

      <div className={styles.actions}>
        <CustomButton label="Search" primary />
        <CustomButton label="Generate" />
      </div>
    </div>
  );
};

export default HomePageSearch;
