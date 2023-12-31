import styles from "./Search.module.scss";
import Logo from "@assets/logo.png";
import { BRAND_NAME } from "@/config/public";
import HomeSearchInput from "./input/Input";
import CustomButton from "@/components/custom-button/CustomButton";
import {
  dispatchFetchCraftsAction,
  dispatchGenerateCraftAction,
} from "@/store/crafts/actions";
import { useRef } from "react";
import toast from "react-hot-toast";

const HomePageSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = () => {
    const prompt = inputRef.current?.value;
    if (!prompt) return;

    toast.promise(
      dispatchGenerateCraftAction({
        prompt: prompt,
        width: 512,
        height: 512,
        numOutputs: 1,
      }),
      {
        loading: `"${prompt}" craft is coming... 🤩`,
        success: `"${prompt}" craft is ready! Check the grid 👇`,
        error: `Failed to generate crafts for "${prompt}" 😢`,
      },
    );
  };

  const handleSearch = () => dispatchFetchCraftsAction(inputRef.current?.value);

  return (
    <div className={styles.container}>
      <img src={Logo} alt={BRAND_NAME} className={styles.logo} />
      <span className={styles.badge}>Try the Next-Gen Text to Image API</span>
      <HomeSearchInput
        name="search"
        inputRef={inputRef}
        onClear={handleSearch}
        placeholder="Drop your idea here..."
      />

      <div className={styles.actions}>
        <CustomButton label="Search" primary onClick={handleSearch} />
        <CustomButton label="Generate" onClick={handleGenerate} />
      </div>
    </div>
  );
};

export default HomePageSearch;
