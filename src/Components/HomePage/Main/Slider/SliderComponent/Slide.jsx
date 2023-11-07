import styles from "../Slider.module.css";
import Shadow from "./Shadow";

export default function Slide({ slide }) {
  return (
    <>
      <div className={styles.slide}>
        <img
          className={styles.photoCover}
          src={`images/${slide.section}/${slide.name}/cover.webp`}
          alt={slide.name}
        />
        <Shadow slide={slide} />
      </div>
    </>
  );
}
