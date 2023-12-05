import { useAppSelector } from "@/hooks/store";
import styles from "./Grid.module.scss";
import { RootState } from "@/store/store";
import HomePageGridItem from "./Item";

const HomePageGrid = () => {
  const { crafts } = useAppSelector((state: RootState) => state.crafts);

  return (
    <div className={styles.container}>
      {crafts.map((craft) => {
        if (!craft.images?.length) return null;

        return <HomePageGridItem key={craft.id} craft={craft} />;
      })}
    </div>
  );
};

export default HomePageGrid;
