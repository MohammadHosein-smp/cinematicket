import { Link } from "react-router-dom";
import styles from "../../Movies.module.css";

export default function SaleMovie({ movie, number }) {
  return (
    <div className={styles.movieSale}>
      <div className={styles.movieSaleBox}>
        <Link to={`/movie/detail/${movie.id}`}>
        <img
          src={`/images/${movie.section}/${movie.name}/poster.webp`}
          alt={movie.name}
          />
          </Link>
        <div className={styles.nameAmountDirector}>
          <div className={styles.nameAmount}>
            <Link to={`/movie/detail/${movie.id}`} className={styles.name}>
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
