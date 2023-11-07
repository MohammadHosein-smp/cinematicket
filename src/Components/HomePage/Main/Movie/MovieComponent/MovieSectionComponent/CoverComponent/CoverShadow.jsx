import styles from "../../../Movies.module.css";
import Director from "../../../../Slider/SliderComponent/Director";
import Information from "../../../../Slider/SliderComponent/Information";
import Description from "../../../../Slider/SliderComponent/Description";
import Actors from "./Actors";
import CoverBuyTicket from "./CoverBuyTicket";

export default function CoverShadow({ slide, cover }) {
  return (
    <div className={styles.shadow}>
      <div className={styles.posterInf}>
        <img
          className={styles.photoPoster}
          src={`images/${cover.section}/${cover.name}/poster.webp`}
          alt={cover.name}
        />
        <div className={styles.infBox}>
          <div className={styles.name}>{cover.name}</div>
          <Director slide={cover} />
          <Information slide={cover} />
          <Description slide={cover} />
          <Actors cover={cover} />
        </div>
      </div>
      <CoverBuyTicket cover={cover} />
    </div>
  );
}
