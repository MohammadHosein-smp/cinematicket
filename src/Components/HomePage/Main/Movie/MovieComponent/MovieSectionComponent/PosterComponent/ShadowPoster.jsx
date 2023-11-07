import styles from "../../../Movies.module.css";
import Director from "../../../../Slider/SliderComponent/Director";
import ViewPoster from "./ViewPoster";
import RatePoster from "./RatePoster";

export default function ShadowPoster({ poster, height }) {
  return (
    <div className={styles.shadowPoster} style={{ height: height }}>
      <div className={styles.infBox}>
        <div className={styles.rateView}>
          <RatePoster poster={poster} />
          <ViewPoster poster={poster} />
        </div>
        <Director slide={poster} />
      </div>
    </div>
  );
}
