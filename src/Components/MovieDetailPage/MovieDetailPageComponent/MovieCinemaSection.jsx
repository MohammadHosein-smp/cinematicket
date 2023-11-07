import styles from "../MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCinemaSection({ cinema }) {
  return (
    <div className={styles.cinema}>
      <img src={`/images/cinema/${cinema.name}.webp`} alt={cinema.name} />
      <div className={styles.cinemaInfBox}>
        <span className={styles.cinemaName}>{cinema.name}</span>
        <div className={styles.cinemaLocation}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{cinema.location}</span>
        </div>
        <div
          style={{
            backgroundColor: cinema.ratePoint < 4 ? "gray" : "green",
          }}
          className={styles.cinemaRate}
        >
          <FontAwesomeIcon icon={faStar} />
          <span>{cinema.ratePoint}/5</span>
        </div>
      </div>
    </div>
  );
}
