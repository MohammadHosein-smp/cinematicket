import styles from "../HomePage/Main/Movie/Movies.module.css";
import style from "./MovieMorePage.module.css";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Movie } from "../../Data";
import SaleTableSection from "../HomePage/Main/Movie/MovieComponent/SaleTableSection";
import Poster from "../HomePage/Main/Movie/MovieComponent/MovieSectionComponent/Poster";

export default function MovieMore() {
  const { title } = useParams();

  return (
    <Layout>
      <div className={style.movie}>
        <div className={style.rightSide}>
          <div className={style.title}>{title}</div>
          <div
            className={styles.movies}
            style={{ gridTemplateColumns: "repeat(7 , 1fr)" }}
          >
            {Movie.filter((movie) => {
              return movie.section === title;
            }).map((poster, i) => {
              return (
                <Poster
                  poster={poster}
                  key={i}
                  width={0.1 * window.innerWidth - 14.285}
                />
              );
            })}
          </div>
        </div>
        <SaleTableSection />
      </div>
    </Layout>
  );
}
