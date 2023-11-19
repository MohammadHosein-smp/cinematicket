import styles from "../../Movies.module.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function MovieTitle({ title }) {
  return (
    <div className={styles.movieTitle}>
      <div className={styles.titleRight}>{title}</div>
      <div className={styles.titleLeft}>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/movie/more/${title}`}
          className={styles.seeMore}
        >
          <span>مشاهده همه</span>
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </Link>
      </div>
    </div>
  );
}
