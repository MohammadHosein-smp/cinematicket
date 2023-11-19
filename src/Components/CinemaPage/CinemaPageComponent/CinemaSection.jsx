import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CinemaPage.module.css";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { cinemaData } from "../../../Data";
import CinemaPossibilities from "./CinemaPossibilities";
import { useSelector } from "react-redux";

export default function CinemaSection() {
  const city = useSelector((state) => state.customer.city);
  const Cinema = [...cinemaData];
  Cinema.sort((a, b) => {
    if (a.city === city && b.city !== city) {
      return -1;
    } else if (a.city === city && b.city === city) {
      return 0;
    } else {
      return 1;
    }
  });
  return (
    <section className={styles.cinemaSec}>
      {Cinema.map((cinema) => {
        return (
          <div key={cinema.name} className={styles.cinema}>
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
                {cinema.rateNum && (
                  <>
                    <span>.</span>
                    <div className={styles.rateNum}>{cinema.rateNum} رای</div>
                  </>
                )}
              </div>
              <CinemaPossibilities cinema={cinema} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
