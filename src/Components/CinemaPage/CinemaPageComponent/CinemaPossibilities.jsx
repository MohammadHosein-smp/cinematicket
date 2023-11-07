import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CinemaPage.module.css";
import { possibilities } from "../../../Data";

export default function CinemaPossibilities({ cinema }) {
  return (
    <ul className={styles.cinemaPossibilities}>
      {possibilities
        .filter((item) => cinema.possibilities.includes(item.possibility))
        .map((possibility) => {
          return (
            <li
              className={styles.cinemaPossibility}
              key={possibility.possibility}
            >
              <FontAwesomeIcon
                className={styles.icon}
                icon={possibility.icon}
              />
              <span>{possibility.possibility}</span>
            </li>
          );
        })}
    </ul>
  );
}
