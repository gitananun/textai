import styles from "./Grid.module.scss";
import HomePageGridItem from "./Item";

const items: string[] = [
  "https://image.lexica.art/full_webp/fec99b86-e1f0-4da5-b51d-8675ecf2f704",
  "https://image.lexica.art/full_webp/e95cd2a6-f3a3-4a38-8482-45d90d1c92c3",
  "https://image.lexica.art/full_webp/4d307c75-343c-4f7e-94f6-f5fea03f1cd7",
  "https://image.lexica.art/full_webp/1bec7149-4df8-41ad-9a58-e4cf79cac565",
  "https://image.lexica.art/full_webp/1a6df7e5-d006-47ba-ac76-783555cd2579",
  "https://image.lexica.art/full_webp/b006c712-5338-45c2-ac45-27ccc182ac50",
  "https://image.lexica.art/full_webp/604b7c3f-aa91-4693-8e11-fb10360f06da",
  "https://image.lexica.art/full_webp/46d51444-464b-4d83-ba17-6729f029824f",
  "https://image.lexica.art/full_webp/73084657-8cca-4214-9bc5-69d869cd328b",
  "https://image.lexica.art/full_webp/10c9fb15-e309-4ae4-af1c-df11e8c99354",
  "https://image.lexica.art/full_webp/9c23ebdc-1238-464d-85af-458a798c5224",
];

const HomePageGrid = () => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <HomePageGridItem key={item} label={"Generative AI"} imageSrc={item} />
      ))}
    </div>
  );
};

export default HomePageGrid;
