import { useAppSelector } from "@/hooks/store";
import styles from "./Grid.module.scss";
import { RootState } from "@/store/store";
import HomePageGridItem from "./Item";

const HomePageGrid = () => {
  const { crafts } = useAppSelector((state: RootState) => state.crafts);

  return (
    <div className={styles.container}>
      {crafts.map((craft) => (
        <HomePageGridItem
          key={craft.id}
          label={craft.prompt}
          imageSrc={
            craft.images?.[0] ??
            "https://image.lexica.art/full_webp/9c23ebdc-1238-464d-85af-458a798c5224"
          }
        />
      ))}
    </div>
  );
};

export default HomePageGrid;
