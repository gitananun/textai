import styles from "./Search.module.scss";
import Logo from "@assets/logo.png";
import { BRAND_NAME } from "@/config/public";
import HomeSearchInput from "./input/Input";
import CustomButton from "@/components/custom-button/CustomButton";
import { dispatchGenerateCraftAction } from "@/store/crafts/actions";
import { useRef } from "react";

const HomePageSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    const prompt = inputRef.current?.value;
    if (!prompt) return;

    dispatchGenerateCraftAction({
      prompt: prompt,
      width: 512,
      height: 512,
      numOutputs: 1,
    });
  };

  return (
    <div className={styles.container}>
      <img src={Logo} alt={BRAND_NAME} className={styles.logo} />
      <span className={styles.badge}>Try the Next-Gen Text to Image API</span>
      <HomeSearchInput
        name="search"
        placeholder="Drop your idea here..."
        inputRef={inputRef}
      />

      <div className={styles.actions}>
        <CustomButton label="Search" primary />
        <CustomButton label="Generate" onClick={handleOnSubmit} />
      </div>
    </div>
  );
};

export default HomePageSearch;
