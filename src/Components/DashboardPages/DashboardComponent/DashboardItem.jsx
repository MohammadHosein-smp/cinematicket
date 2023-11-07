import styles from "../Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function DashboardItem({ children }) {
  return (
    <div className={styles.dashboardItems}>
      <div className={styles.dashboardItem}>{children}</div>
      <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
    </div>
  );
}
