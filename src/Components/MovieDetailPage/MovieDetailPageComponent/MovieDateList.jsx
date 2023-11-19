import styles from "../MovieDetail.module.css";
import { Date } from "../../../Data";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDate } from "../../../salonDataSlice";

export default function MovieDateList() {
  const currentDate = useSelector((state) => state.salonData.date);
  const activeDate = {
    backgroundColor: "rgb(0,0,0,0.05)",
    fontWeight: "bold",
  };
  const dispatch = useDispatch();
  document.addEventListener("scroll", () => {
    if (
      document.getElementById("dateList") &&
      document.getElementById("restOfInf")
    ) {
      if (window.scrollY > document.getElementById("dateList").offsetTop - 60) {
        document.getElementById("dateList").classList.add(styles.fixed);
      } else {
        document.getElementById("dateList").classList.remove(styles.fixed);
      }
    }
  });
  return (
    <div className={styles.dateList} id="dateList">
      {Date.map((date, i) => {
        return (
          <div
            key={i}
            className={styles.dateBox}
            onClick={() => dispatch(setCurrentDate(date.date))}
          >
            <span
              style={date.date === currentDate ? activeDate : null}
              className={styles.day}
            >
              {date.day}
            </span>
            <span
              style={date.date === currentDate ? { color: "black" } : null}
              className={styles.date}
            >
              {date.date}
            </span>
          </div>
        );
      })}
    </div>
  );
}
