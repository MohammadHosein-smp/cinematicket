import styles from "../MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function MovieCommentSection() {
  return (
    <div className={styles.commentSec}>
      <div className={styles.commentMenu}>
        <div className={styles.commentTitle}>
          <span>دیدگاه‌های فیلم هتل</span>
          <span>(x) دیدگاه ثبت شده</span>
        </div>
        <button className={styles.rateBtn}>
          <FontAwesomeIcon icon={faHeart} />
          <span>امتیاز شما به فیلم</span>
        </button>
      </div>
      <div className={styles.commentBox}>
        <img src="/images/profile.svg" alt="profile" />
        <textarea placeholder="دیدگاه شما ..." />
      </div>
      <div className={styles.infSendBox}>
        <span>x/500</span>
        <button>
          <FontAwesomeIcon icon={faComment} />
          <span>ارسال دیدگاه</span>
        </button>
      </div>
    </div>
  );
}
