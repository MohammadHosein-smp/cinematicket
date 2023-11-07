import styles from "../NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      <input
        type="text"
        placeholder="جست‌و‌جوی فیلم، سینما، کارگردان، بازیگر و ..."
      />
    </div>
  );
}
