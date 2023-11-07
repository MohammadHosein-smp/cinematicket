import { Link } from "react-router-dom";
import styles from "../../Movies.module.css";
import ShadowPoster from "./PosterComponent/ShadowPoster";

export default function Poster({ poster, width }) {
  return (
    <Link to={`/movie/detail/${poster.id}`} className={styles.poster} style={{ width: width }}>
      <img
        className={styles.photoPoster}
        style={{ height: width * 1.33 }}
        src={`/images/${poster.section}/${poster.name}/poster.webp`}
        alt={poster.name}
      />
      <ShadowPoster poster={poster} height={width * 1.33} />
      <div className={styles.movieName}>{poster.name}</div>
    </Link>
  );
}
