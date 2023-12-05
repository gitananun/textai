import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Grid.module.scss";
import { ICraft } from "@/types/craft";
import saveAs from "file-saver";
import toast from "react-hot-toast";

type Props = {
  craft: ICraft;
  handleImageModal: (src: string) => void;
};

const HomePageGridItem = (props: Props) => {
  const { craft, handleImageModal } = props;
  const { prompt, createdAt, images } = craft;

  const handleDownload = (image: string) => {
    saveAs(image, prompt);
    toast.success("You've just downloaded a craft!");
  };

  return (
    <>
      {images?.map((src) => (
        <div
          key={src}
          className={styles.item}
          onClick={() => handleImageModal(src)}
        >
          <img alt={prompt} src={src} className={styles.image} />
          <div className={styles.footer}>
            <div className={styles.content}>
              <div>
                <p className={styles.label}>{prompt}</p>
                <small>{createdAt}</small>
              </div>
              <FontAwesomeIcon
                icon={faDownload}
                className={styles.icon}
                onClick={() => handleDownload(src)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePageGridItem;
