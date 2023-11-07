import styles from "../Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BuyTicket({ slide }) {
  return (
    <Link to={`/movie/detail/${slide.id}`} className={styles.ticket}>
      <div className={styles.buyTicket}>
        <FontAwesomeIcon className={styles.icon} icon={faTicket} />
        <span>خرید بلیت</span>
      </div>
    </Link>
  );
}
