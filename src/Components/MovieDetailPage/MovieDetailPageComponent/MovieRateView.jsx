import styles from "../MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { heart } from "../../../Data";

export default function MovieRateView({ movie }) {
  return (
    <div className={styles.rateView}>
      {movie.rate && (
        <div className={styles.rate}>
          <span>
            <strong>{movie.rate}</strong>/5
          </span>
          <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        </div>
      )}
      <div className={styles.viewRate}>
        {movie.view && (
          <div className={styles.view}>
            <span>{movie.view}</span>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
          </div>
        )}
        {(movie.rate || movie.view) && <div className={styles.slash} />}
        <button className={styles.rateBtn}>
          <FontAwesomeIcon icon={heart} />
          <span>امتیاز شما</span>
        </button>
      </div>
    </div>
  );
}
