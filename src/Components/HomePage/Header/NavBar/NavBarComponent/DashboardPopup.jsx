import styles from "../NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faRightFromBracket,
  faTicket,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { faIdBadge, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import DashPopSection from "./DashPopSection";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function DashboardPopup() {
  const [dashboardPopup, setDashboardPopup] = useState(false);
  const dashboardRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dashboardRef.current && !dashboardRef.current.contains(e.target)) {
        setDashboardPopup(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dashboardRef}>
      <Link onClick={() => setDashboardPopup(!dashboardPopup)}>
        <Button>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <span>ورود یا ثبت نام</span>
        </Button>
      </Link>
      {dashboardPopup && (
        <div className={styles.popup}>
          <Link to="/dashboard/wallet">
            <DashPopSection>
              <FontAwesomeIcon className={styles.popupIcon} icon={faWallet} />
              <span>کیف پول</span>
            </DashPopSection>
          </Link>
          <DashPopSection>
            <FontAwesomeIcon
              className={styles.popupIcon}
              icon={faPenToSquare}
            />
            <span>اطلاعات کاربری</span>
          </DashPopSection>
          <Link to="/dashboard/authentication">
            <DashPopSection>
              <FontAwesomeIcon className={styles.popupIcon} icon={faIdBadge} />
              <span>احراز هویت</span>
            </DashPopSection>
          </Link>
          <Link to="/dashboard/transactions">
            <DashPopSection>
              <FontAwesomeIcon
                className={styles.popupIcon}
                icon={faClipboardCheck}
              />
              <span>تراکنش‌ها</span>
            </DashPopSection>
          </Link>
          <Link to="/dashboard/mytickets">
            <DashPopSection>
              <FontAwesomeIcon className={styles.popupIcon} icon={faTicket} />
              <span>بلیت های من</span>
            </DashPopSection>
          </Link>
          <div className={styles.exit}>
            <FontAwesomeIcon
              className={styles.popupIcon}
              icon={faRightFromBracket}
              transform={{ rotate: "180" }}
            />
            <span>خروج از حساب کاربری</span>
          </div>
        </div>
      )}
    </div>
  );
}
