import styles from "./NavBar.module.css";
import NavLeft from "./NavBarComponent/NavLeft";
import NavRight from "./NavBarComponent/NavRight";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavRight />
      <NavLeft />
    </nav>
  );
}
