import styles from "../NavBar.module.css";
import LogoBtn from "./LogoBtn";
import CinemaBtn from "./CinemaBtn";
import SearchBox from "./SearchBox";

export default function NavRight() {
  return (
    <div className={styles.navRight}>
      <LogoBtn />
      <CinemaBtn />
      <SearchBox />
    </div>
  );
}
