import styles from "../ChooseSeatPage.module.css";
import { useSelector } from "react-redux";
import { Date } from "../../../Data";

export function ChairPopup({ chair }) {
  const salonData = useSelector((state) => state.salonData);
  const day = Date.find((obj) => obj.date === salonData.date).day;
  return (
    <div class={styles.popup}>
      <div className={styles.chairInf}>
        <div>
          <div>صندلی</div>
          <div className={styles.column}>{chair.column}</div>
        </div>
        <div className={styles.separator} />
        <div>
          <div>ردیف</div>
          <div className={styles.row}>{chair.row}</div>
        </div>
      </div>
      <div className={styles.price}>{`${
        day === "سه شنبه" ? chair.price / 2 : chair.price
      },000 تومان`}</div>
    </div>
  );
}
