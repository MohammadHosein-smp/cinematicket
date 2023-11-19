import { Link, useLocation } from "react-router-dom";
import styles from "../../Movies.module.css";
export default function SaleMovie({ movie, number }) {
  const location = useLocation();
  return (
    <div
      className={`${styles.movieSale} ${
        Number(
          location.pathname.split("/")[location.pathname.split("/").length - 1]
        ) === movie.id
          ? styles.activeBackgroundColor
          : null
      }`}
    >
      <div className={styles.movieSaleBox}>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/movie/detail/${movie.id}`}
        >
          <img
            src={`/images/${movie.section}/${movie.name}/poster.webp`}
            alt={movie.name}
          />
        </Link>
        <div className={styles.nameAmountDirector}>
          <div className={styles.nameAmount}>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={`/movie/detail/${movie.id}`}
              className={styles.name}
            >
              {number}. {movie.name}
            </Link>
            <div className={styles.amount}>{movie.amount}</div>
          </div>
          <div className={styles.director}>{movie.director}</div>
        </div>
      </div>
    </div>
  );
}
