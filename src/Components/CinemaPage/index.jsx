import styles from "./CinemaPage.module.css";
import Layout from "../Layout/Layout";
import SaleTableSection from "../HomePage/Main/Movie/MovieComponent/SaleTableSection";
import CinemaSection from "./CinemaPageComponent/CinemaSection";
import CinemaMenu from "./CinemaPageComponent/CinemaMenu";
export default function CinemaPage() {
  return (
    <Layout>
      <div className={styles.cinemaPage}>
        <div className={styles.rightSide}>
          <CinemaMenu />
          <div className={styles.title}>همه سینماها</div>
          <CinemaSection />
        </div>
        <SaleTableSection />
      </div>
    </Layout>
  );
}
