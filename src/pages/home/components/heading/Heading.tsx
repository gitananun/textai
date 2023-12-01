import styles from "./Heading.module.scss";
import Logo from "@assets/logo.png";
import { BRAND_NAME } from "@/config/public";
import CustomInput from "@/components/custom-input/CustomInput";

const HomePageHeading = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt={BRAND_NAME} className={styles.logo} />
      <span className={styles.badge}>Try the Next-Gen Text to Image API</span>
      <CustomInput name="search" placeholder="Drop your idea here..." />
    </div>
  );
};

export default HomePageHeading;
