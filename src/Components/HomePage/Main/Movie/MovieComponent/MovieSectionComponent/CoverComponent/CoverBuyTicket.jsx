import styles from "../../../Movies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CoverBuyTicket({ cover }) {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/movie/detail/${cover.id}`}
      className={styles.buyTicket}
    >
      <span>خرید بلیت</span>
      <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
    </Link>
  );
}
