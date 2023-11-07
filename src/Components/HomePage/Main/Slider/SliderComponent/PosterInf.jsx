import styles from "../Slider.module.css";
import Description from "./Description";
import BuyTicket from "./BuyTicket";
import Information from "./Information";
import Director from "./Director";

export default function PosterInf({ slide }) {
  return (
    <div className={styles.posterInf}>
      <img
        className={styles.photoPoster}
        src={`images/${slide.section}/${slide.name}/poster.webp`}
        alt={slide.name}
      />
      <div className={styles.infBox}>
        <div className={styles.name}>{slide.name}</div>
        <Director slide={slide} />
        <Information slide={slide} />
        <Description slide={slide} />
        <BuyTicket slide={slide} />
      </div>
    </div>
  );
}
