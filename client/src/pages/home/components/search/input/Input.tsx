import { faGhost, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Input.module.scss";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  onClear: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const HomeSearchInput = (props: Props) => {
  const { inputRef, onClear, ...rest } = props;
  const [suffixIcon, setSuffixIcon] = useState<IconProp>(faGhost);

  const handleInputFocus = () => inputRef?.current?.focus();

  const handleOnChange = () => {
    const value = inputRef.current?.value;

    if (value && value.length > 0) {
      setSuffixIcon(faTimes);
      return;
    }

    setSuffixIcon(faGhost);
  };

  const handleOnClear = () => {
    inputRef.current!.value = "";
    inputRef.current?.focus();
    setSuffixIcon(faGhost);

    onClear();
  };

  return (
    <div className={styles.container}>
      <span className={styles.prefix} onClick={handleInputFocus}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        ref={inputRef}
        className={styles.input}
        onChange={handleOnChange}
        {...rest}
      />
      <span className={styles.suffix}>
        <FontAwesomeIcon icon={suffixIcon} onClick={handleOnClear} />
      </span>
    </div>
  );
};

export default HomeSearchInput;
