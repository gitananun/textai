import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Grid.module.scss";

type Props = {
  label: string;
  imageSrc: string;
};

const HomePageGridItem = (props: Props) => {
  const { label, imageSrc } = props;

  return (
    <div className={styles.item}>
      <img alt={label} src={`${imageSrc}`} className={styles.image} />
      <div className={styles.footer}>
        <div className={styles.content}>
          <div>
            <p className={styles.label}>{label}</p>
            <small>Took only 2 minutes</small>
          </div>
          <FontAwesomeIcon icon={faDownload} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default HomePageGridItem;
