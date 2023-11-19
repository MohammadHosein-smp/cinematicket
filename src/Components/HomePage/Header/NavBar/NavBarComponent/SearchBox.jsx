import styles from "../NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Movie, cinemaData } from "../../../../../Data";
import { Link } from "react-router-dom";

export default function SearchBox() {
  const [searchBoxPopup, setSearchBoxPopup] = useState(false);
  const searchBoxRef = useRef(null);
  const shadowRef = useRef(null);
  const popupRef = useRef(null);
  const [movie, setMovie] = useState(Movie.slice(0, 4));
  const [cinema, setCinema] = useState(cinemaData.slice(0, 3));
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchBoxRef.current &&
        (!searchBoxRef.current.contains(e.target) ||
          (shadowRef.current &&
            shadowRef.current.contains(e.target) &&
            !popupRef.current.contains(e.target)))
      ) {
        setSearchBoxPopup(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={searchBoxRef} className={styles.searchBox}>
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      <input
        type="text"
        placeholder="جست‌و‌جوی فیلم، سینما، کارگردان، بازیگر و ..."
        onClick={() => setSearchBoxPopup(!searchBoxPopup)}
        onChange={(e) => {
          const filteredMovie = [
            ...Movie.filter((movie) => movie.name.includes(e.target.value)),
            ...Movie.filter(
              (movie) =>
                movie.director && movie.director.includes(e.target.value)
            ),
          ];
          const filteredCinema = [
            ...cinemaData.filter((cinema) =>
              cinema.name.includes(e.target.value)
            ),
          ];
          if (filteredMovie.length === 0) {
            setMovie([]);
          } else if (filteredMovie.length < 5 && filteredMovie.length > 0) {
            setMovie(filteredMovie);
          } else if (filteredMovie.length > 4) {
            setMovie(filteredMovie.slice(0, 4));
          }
          if (filteredCinema.length === 0) {
            setCinema([]);
          } else if (filteredCinema.length < 4 && filteredCinema.length > 0) {
            setCinema(filteredCinema);
          } else if (filteredCinema.length > 3) {
            setCinema(filteredCinema.slice(0, 3));
          }
        }}
      />
      {searchBoxPopup && (
        <div ref={shadowRef} className={styles.shadowPopup}>
          <div ref={popupRef} className={styles.searchBoxPopup}>
            <div className={styles.movie}>
              <strong>محبوب‌ترین فیلم‌ها</strong>
              <div className={styles.posters}>
                {movie.map((poster) => (
                  <Link key={poster.name} className={styles.poster}>
                    <img
                      src={`/images/${poster.section}/${poster.name}/poster.webp`}
                      alt={poster.name}
                    />
                    <span>{poster.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.cinema}>
              <strong>محبوب‌ترین سینماها</strong>
              <div className={styles.cinemaPosters}>
                {cinema.map((cinema) => (
                  <Link key={cinema.name} className={styles.cinemaPoster}>
                    <img
                      src={`/images/cinema/${cinema.name}.webp`}
                      alt={cinema.name}
                    />
                    <span>{cinema.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
