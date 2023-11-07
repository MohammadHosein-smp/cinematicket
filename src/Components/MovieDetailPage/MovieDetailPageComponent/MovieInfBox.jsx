import styles from "../MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import MovieRateView from "./MovieRateView";
import MovieActors from "./MovieActors";
import MovieTopSecButtons from "./MovieTopSecButtons";

export default function MovieInfBox({ movie }) {
  return (
    <div className={styles.infBox}>
      <div className={styles.nameDirector}>
        <strong className={styles.name}>فیلم {movie.name}</strong>
        {movie.director && (
          <>
            <span className={styles.slash} />
            <span className={styles.director}>{movie.director}</span>
          </>
        )}
      </div>
      <div className={styles.genreTime}>
        <div className={styles.genre}>{movie.genre}</div>
        {movie.time && (
          <div className={styles.time}>
            <FontAwesomeIcon icon={faClock} />
            <span>{movie.time} دقیقه</span>
          </div>
        )}
      </div>
      <MovieRateView movie={movie} />
      <MovieActors movie={movie} actorsArray={movie.actors.slice(0, 3)} />
      <MovieTopSecButtons movie={movie} />
    </div>
  );
}
