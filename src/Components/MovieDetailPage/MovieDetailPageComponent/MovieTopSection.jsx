import styles from "../MovieDetail.module.css";
import MovieInfBox from "./MovieInfBox";

export default function MovieTopSection({ movie }) {
  return (
    <section className={styles.topSection}>
      <img
        className={styles.banner}
        src={`/images/${movie.section}/${movie.name}/bigcover.webp`}
        alt={movie.id}
      />
      <div className={styles.shadow}>
        <div className={styles.posterInf}>
          <img
            className={styles.poster}
            src={`/images/${movie.section}/${movie.name}/poster.webp`}
            alt={movie.id}
          />
          <MovieInfBox movie={movie} />
        </div>
      </div>
    </section>
  );
}
