import { Link } from "react-router-dom";
import styles from "../MyTickets.module.css";

export default function MyTickets() {
  return (
    <div className={styles.MyTickets}>
      <img src="/images/dashboard/ticket.svg" alt="ticket" />
      <b>تا به‌حال بلیتی نخریدید!</b>
      <div>
        در این صفحه بلیت‌های فعال و بلیت‌های که قبلا خریده‌اید به شما نمایش
        داده‌ می‌شود.
      </div>
      <Link onClick={() => window.scrollTo(0, 0)} to="/">
        مشاهده فیلم ها و خرید بلیت
      </Link>
    </div>
  );
}
