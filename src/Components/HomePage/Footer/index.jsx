import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilm } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.rightSide}>
        <div className={styles.link}>جدول فروش</div>
        <div className={styles.link}>سوالات متداول</div>
        <div className={styles.link}>برنامه های آینده</div>
        <div className={styles.link}>آرشیو فیلم ها</div>
        <div className={styles.link}>قوانین و مقررات</div>
        <div className={styles.link}>درباره ما</div>
        <div className={styles.link}>تماس با سینماتیکت</div>
      </div>
      <div className={styles.leftSide}>
        <FontAwesomeIcon className={styles.icon} icon={faFilm} />
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        <FontAwesomeIcon className={styles.icon} icon={faTelegram} />
        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
      </div>
    </div>
  );
}
