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
        <div className="flex items-start">
          <p className={styles.label}>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageGridItem;
