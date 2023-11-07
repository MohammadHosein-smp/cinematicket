import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CinemaPage.module.css";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { cinemaData } from "../../../Data";
import CinemaPossibilities from "./CinemaPossibilities";

export default function CinemaSection() {
  return (
    <section className={styles.cinemaSec}>
      {cinemaData.map((cinema) => {
        return (
          <div className={styles.cinema}>
            <img src={`/images/cinema/${cinema.name}.webp`} alt={cinema.name} />
            <div className={styles.infBox}>
              <span className={styles.name}>{cinema.name}</span>
              <div className={styles.location}>
                <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                <span>{cinema.location}</span>
              </div>
              <div className={styles.rate}>
                <div
                  style={{
                    backgroundColor: cinema.ratePoint < 4 ? "black" : "green",
                  }}
                  className={styles.ratePoint}
                >
                  <FontAwesomeIcon className={styles.icon} icon={faStar} />
                  <div>{cinema.ratePoint}/5</div>
                </div>
                <span>.</span>
                <div className={styles.rateNum}>{cinema.rateNum} رای</div>
              </div>
              <CinemaPossibilities cinema={cinema} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
