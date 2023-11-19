import styles from "../ChooseSeatPage.module.css";
import { useSelector } from "react-redux";
import { statusList } from "../../../Data";

export function ChooseSeatPageChoiceGuide() {
  const salonData = useSelector((state) => state.salonData);
  return (
    <div className={styles.choiceGuide}>
      <div className={styles.guide}>
        <div className={styles.guideItem}>
          <div
            className={styles.circle}
            style={{
              backgroundColor: statusList.find(
                (el) => el.status === "available"
              ).color,
            }}
          />
          <span>صندلی خالی</span>
        </div>
        <div className={styles.guideItem}>
          <div
            className={styles.circle}
            style={{
              border: `2px solid ${
                statusList.find((el) => el.status === "soldOut").borderColor
              }`,
            }}
          />
          <span>فروخته شده</span>
        </div>
        <div className={styles.guideItem}>
          <div
            className={styles.circle}
            style={{
              backgroundColor: statusList.find(
                (el) => el.status === "unavailable"
              ).color,
            }}
          />
          <span>غیرقابل خرید</span>
        </div>
        <div className={styles.guideItem}>
          <div
            className={styles.circle}
            style={{
              backgroundColor: statusList.find((el) => el.status === "chosen")
                .color,
            }}
          />
          <span>انتخاب شما</span>
        </div>
      </div>
      <div className={styles.capacity}>
        ظرفیت باقیمانده:
        {` ${
          salonData.chairs.filter((el) => el.status === "available").length
        }`}
      </div>
    </div>
  );
}
