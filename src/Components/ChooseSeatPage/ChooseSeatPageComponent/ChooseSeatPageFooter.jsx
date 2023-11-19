import styles from "../ChooseSeatPage.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Date, Movie } from "../../../Data";
import { ChooseSeatPageRegisterBtn } from "./ChooseSeatPageRegisterBtn";
import { ChooseSeatPageTickets } from "./ChooseSeatPageTickets";
import { ChooseSeatPageChoiceGuide } from "./ChooseSeatPageChoiceGuide";

export function ChooseSeatPageFooter() {
  const salonData = useSelector((state) => state.salonData);
  const movie = Movie.find((movie) => movie.id === salonData.movieId);
  const day = Date.find((obj) => obj.date === salonData.date).day;
  return (
    <footer>
      <ChooseSeatPageChoiceGuide />
      <div className={styles.infMovieTicket}>
        <div className={styles.infMovie}>
          <img
            src={`/images/${movie.section}/${movie.name}/poster.webp`}
            alt={movie.name}
          />
          <div className={styles.infBox}>
            <span className={styles.movieName}>{movie.name}</span>
            <div className={styles.cinemaLocation}>
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <strong>{salonData.cinemaName}</strong> {salonData.salonName}
              </div>
            </div>
            <div className={styles.ticketTime}>
              <FontAwesomeIcon icon={faClock} />
              <div>{`${day} ${salonData.date} - سانس ${salonData.time}`}</div>
            </div>
          </div>
        </div>
        <ChooseSeatPageTickets />
        <ChooseSeatPageRegisterBtn />
      </div>
    </footer>
  );
}
