import styles from "../Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Buttons({ onRightClick, onLeftClick }) {
  return (
    <>
      <div className={styles.buttons}>
        <FontAwesomeIcon
          onClick={onRightClick}
          className={styles.icon}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          onClick={onLeftClick}
          className={styles.icon}
          icon={faChevronLeft}
        />
      </div>
    </>
  );
}
