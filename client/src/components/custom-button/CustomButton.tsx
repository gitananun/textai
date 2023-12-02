import styles from "./CustomButton.module.scss";

type Props = {
  label: string;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const CustomButton = (props: Props) => {
  const { className, label, primary, type, onClick } = props;

  const htmlClassName = `${styles.button} ${primary && styles.primary} ${
    className ?? ""
  }`;

  return (
    <button type={type} onClick={onClick} className={htmlClassName}>
      {label}
    </button>
  );
};

export default CustomButton;
