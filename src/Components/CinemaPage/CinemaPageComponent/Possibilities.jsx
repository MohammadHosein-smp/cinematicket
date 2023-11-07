import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CinemaPage.module.css";
import { possibilities } from "../../../Data";

export default function Possibilities() {
  return (
    <ul className={styles.possibilities}>
      {possibilities.map((possibility) => {
        return (
          <li className={styles.possibility} key={possibility.possibility}>
            <FontAwesomeIcon icon={possibility.icon} />
            <span>{possibility.possibility}</span>
          </li>
        );
      })}
    </ul>
  );
}
