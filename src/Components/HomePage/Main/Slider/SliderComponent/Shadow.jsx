import styles from "../Slider.module.css";
import PosterInf from "./PosterInf";

export default function Shadow({ slide }) {
  return (
    <>
      <div className={styles.shadow}>
        <PosterInf slide={slide} />
        <img
          className={styles.photoSuperstar}
          src={`images/${slide.section}/${slide.name}/superstar.webp`}
          alt={slide.name}
        />
      </div>
    </>
  );
}
