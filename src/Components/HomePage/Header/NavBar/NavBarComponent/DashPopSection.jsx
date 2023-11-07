import styles from "../NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function DashPopSection({ children }) {
  return (
    <div className={styles.dashPopSec}>
      <div className={styles.lable}>{children}</div>
      <FontAwesomeIcon className={styles.popupIcon} icon={faChevronLeft} />
    </div>
  );
}
