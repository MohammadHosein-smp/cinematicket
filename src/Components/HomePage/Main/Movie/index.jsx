import styles from "./Movies.module.css";
import { Movie } from "../../../../Data";
import MovieSection from "./MovieComponent/MovieSection";
import SaleTableSection from "./MovieComponent/SaleTableSection";

export default function Movies() {
  return (
    <div className={styles.movie}>
      <div>
        <MovieSection cover={Movie[0]} sec="فیلم ایرانی" />
        <MovieSection sec="کودک و نوجوان" />
        <MovieSection cover={Movie[34]} sec="تئاتر" />
        <MovieSection cover={Movie[36]} sec="هنر و تجربه" />
        <MovieSection cover={Movie[52]} sec="تئاتر کمدی" />
        <MovieSection sec="فیلم خارجی" />
      </div>
      <SaleTableSection />
    </div>
  );
}
