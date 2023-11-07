import styles from "../NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import CitiesPopup from "./CitiesPopup";
import DashboardPopup from "./DashboardPopup";

export default function NavLeft() {
  return (
    <div className={styles.navLeft}>
      <CitiesPopup />
      <Link to="/dashboard/mytickets">
        <Button>
          <FontAwesomeIcon className={styles.icon} icon={faTicket} />
          <span>بلیت‌های من</span>
        </Button>
      </Link>
      <DashboardPopup />
    </div>
  );
}
