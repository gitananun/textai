import { faGhost, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import styles from "./Input.module.scss";

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

const HomeSearchInput = (props: Props) => {
  const { ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputFocus = () => inputRef?.current?.focus();

  return (
    <div className={styles.container}>
      <span className={styles.prefix} onClick={handleInputFocus}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input className={styles.input} ref={inputRef} {...rest} />
      <span className={styles.suffix}>
        <FontAwesomeIcon icon={faGhost} />
      </span>
    </div>
  );
};

export default HomeSearchInput;
