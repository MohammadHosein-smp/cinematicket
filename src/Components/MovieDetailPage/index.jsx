import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom";
import { Movie } from "../../Data";
import SaleTableSection from "../HomePage/Main/Movie/MovieComponent/SaleTableSection";
import Layout from "../Layout/Layout";
import MovieTopSection from "./MovieDetailPageComponent/MovieTopSection";
import MovieActors from "./MovieDetailPageComponent/MovieActors";
import MovieCommentSection from "./MovieDetailPageComponent/MovieCommentSection";
import SansSelection from "./MovieDetailPageComponent/SansSelection";

export default function MovieDetailPage() {
  const { id } = useParams();
  const movie = Movie.find((el) => el.id === Number(id));
  return (
    <Layout>
      <MovieTopSection movie={movie} />
      <div className={styles.movieDetailPage}>
        <section className={styles.rightSide}>
          <strong className={styles.aboutMovie}>
            درباره فیلم سینمایی {movie.name}
          </strong>
          <p className={styles.description}>{movie.description}</p>
          <p>{movie.synopsis}</p>
          <div className={styles.actorsLabel}>بازیگران «{movie.name}»</div>
          <MovieActors movie={movie} actorsArray={movie.actors} />
          <SansSelection movie={movie} />
          <div className={styles.restOfInf}>سایر اطلاعات {movie.name}</div>
          <div className={styles.yearOfMade}>سال ساخت : {movie.yearOfMade}</div>
          <MovieCommentSection />
        </section>
        <SaleTableSection />
      </div>
    </Layout>
  );
}
