import styles from "../../../Movies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ViewPoster({ poster }) {
  return (
    <div
      className={styles.view}
      style={{ display: poster.view ? "flex" : "none" }}
    >
      <span>{poster.view}</span>
      <FontAwesomeIcon className={styles.icon} icon={faUser} />
    </div>
  );
}
