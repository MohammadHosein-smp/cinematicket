import styles from "../MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import MovieCinemaSection from "./MovieCinemaSection";

export default function MovieCinemaSansList({
  cinema,
  openSans,
  handleClick,
  i,
}) {
  const activeButton = { backgroundColor: "rgb(246, 240, 240)" };
  return (
    <div>
      <div onClick={handleClick} className={styles.cinemaSans}>
        <MovieCinemaSection cinema={cinema} />
        <div style={openSans[i] ? activeButton : null} className={styles.sans}>
          <span>سانس ها</span>
          <FontAwesomeIcon icon={openSans[i] ? faChevronUp : faChevronDown} />
        </div>
      </div>
      {openSans[i] && (
        <div className={styles.aboutCinema}>
          <span>درباره {cinema.name}</span>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
    </div>
  );
}
