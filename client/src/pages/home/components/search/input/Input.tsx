import { faGhost, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Input.module.scss";

type Props = {
  inputRef: React.RefObject<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const HomeSearchInput = (props: Props) => {
  const { inputRef, ...rest } = props;

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
