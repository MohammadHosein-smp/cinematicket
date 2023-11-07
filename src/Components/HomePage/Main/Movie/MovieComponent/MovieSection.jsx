import styles from "../Movies.module.css";
import { Movie } from "../../../../../Data";
import Cover from "./MovieSectionComponent/Cover";
import MovieTitle from "./MovieSectionComponent/MovieTitle";
import Poster from "./MovieSectionComponent/Poster";

export default function MovieSection({ cover, sec }) {
  return (
    <div id={sec}>
      {cover && <Cover cover={cover} />}
      <MovieTitle title={sec} />
      <div className={styles.movies}>
        {Movie.filter((Movie) => {
          return Movie.section === sec;
        }).map((poster) => {
          return (
            <Poster
              poster={poster}
              key={poster.name}
              width={0.14 * window.innerWidth - 16}
            />
          );
        })}
      </div>
    </div>
  );
}
