import styles from "../MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export default function MovieTopSecButtons({ movie }) {
  return (
    <div className={styles.buttons}>
      <button className={styles.firstBtn}>
        <FontAwesomeIcon icon={faTicket} transform={{ rotate: "90" }} />
        <span>انتخاب سینما و خرید بلیت</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faPlay} />
        <span>تیزر فیلم</span>
      </button>
      <button>
        <FontAwesomeIcon icon={faComment} />
        <span>نقد فیلم {movie.name}</span>
      </button>
    </div>
  );
}
