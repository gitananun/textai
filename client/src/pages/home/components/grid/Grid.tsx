import { useAppSelector } from "@/hooks/store";
import styles from "./Grid.module.scss";
import { RootState } from "@/store/store";
import HomePageGridItem from "./Item";
import Modal from "../modal/Modal";
import { useState } from "react";

const HomePageGrid = () => {
  const [modalImage, setModalImage] = useState("");
  const { crafts } = useAppSelector((state: RootState) => state.crafts);

  const handleImageModal = (src: string) => setModalImage(src);

  return (
    <div className={styles.container}>
      {crafts.map((craft) => {
        if (!craft.images?.length) return null;

        return (
          <HomePageGridItem
            key={craft.id}
            craft={craft}
            handleImageModal={handleImageModal}
          />
        );
      })}

      <Modal
        imageUrl={modalImage}
        isOpen={modalImage ? true : false}
        onClose={() => handleImageModal("")}
      />
    </div>
  );
};

export default HomePageGrid;
