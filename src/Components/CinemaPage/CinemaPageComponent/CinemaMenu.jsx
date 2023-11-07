import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CinemaPage.module.css";
import {
  faChevronDown,
  faChevronUp,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Possibilities from "./Possibilities";

export default function CinemaMenu() {
  const [openPossibilities, setOpenPossibilities] = useState(false);
  return (
    <div className={styles.menu}>
      <div className={styles.menuBar}>
        <div className={styles.menuOption}>
          <span>همه سینماها</span>
          <span>محبوب ترین‌ها</span>
          <span>نزدیک ترین‌ها</span>
        </div>
        <div
          onClick={() => setOpenPossibilities(!openPossibilities)}
          className={`${styles.filter}  ${openPossibilities && styles.active}`}
        >
          <FontAwesomeIcon className={styles.icon} icon={faFilter} />
          <span>فیلتر امکانات</span>
          {!openPossibilities && (
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
          )}
          {openPossibilities && (
            <FontAwesomeIcon className={styles.icon} icon={faChevronUp} />
          )}
        </div>
      </div>
      {openPossibilities && <Possibilities />}
    </div>
  );
}
