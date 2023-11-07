import styles from "../../../Movies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function RatePoster({ poster }) {
  return (
    <div
      className={styles.rate}
      style={{ display: poster.rate ? "flex" : "none" }}
    >
      <div>
        <span>{poster.rate}</span>/5
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faHeart} />
    </div>
  );
}
