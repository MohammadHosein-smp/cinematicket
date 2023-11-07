import styles from "../MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieCinemaList from "./MovieCinemaList";
import MovieDateList from "./MovieDateList";

export default function SansSelection({ movie }) {
  return (
    <div className={styles.sansSelection}>
      <div className={styles.titleSearch}>
        <span>انتخاب و سانس</span>
        <div className={styles.searchBox}>
          <input type="text" placeholder="جستجوی نام سینما، موقعیت مکانی..." />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <MovieDateList />
      <MovieCinemaList movie={movie} />
    </div>
  );
}
