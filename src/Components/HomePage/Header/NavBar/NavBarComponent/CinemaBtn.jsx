import styles from "../NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CinemaBtn() {
  return (
    <Link to="/home/cinema" className={styles.cinemaBtn}>
      <FontAwesomeIcon className={styles.icon} icon={faFilm} />
      <span>سینما</span>
    </Link>
  );
}
