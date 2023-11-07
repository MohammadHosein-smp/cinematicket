import styles from "./Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faRightFromBracket,
  faTicket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { faIdBadge, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import DashboardItem from "./DashboardComponent/DashboardItem";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardBox}>
        <Link to="/dashboard/wallet">
          <DashboardItem>
            <FontAwesomeIcon className={styles.icon} icon={faWallet} />
            <span>کیف پول</span>
          </DashboardItem>
        </Link>
        <DashboardItem>
          <FontAwesomeIcon className={styles.icon} icon={faPenToSquare} />
          <span>اطلاعات کاربری</span>
        </DashboardItem>
        <Link to="/dashboard/authentication">
          <DashboardItem>
            <FontAwesomeIcon className={styles.icon} icon={faIdBadge} />
            <span>احراز هویت</span>
          </DashboardItem>
        </Link>
        <Link to="/dashboard/transactions">
          <DashboardItem>
            <FontAwesomeIcon className={styles.icon} icon={faClipboardCheck} />
            <span>تراکنش‌ها</span>
          </DashboardItem>
        </Link>
        <Link to="/dashboard/mytickets">
          <DashboardItem>
            <FontAwesomeIcon className={styles.icon} icon={faTicket} />
            <span>بلیت‌های من</span>
          </DashboardItem>
        </Link>
      </div>
      <div className={styles.exitBtn}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faRightFromBracket}
          transform={{ rotate: "180" }}
        />
        <span>خروج از حساب کاربری</span>
      </div>
    </div>
  );
}
