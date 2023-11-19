import styles from "../ChooseSeatPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Date, SalonSeat, Salons } from "../../../Data";
import { changeSans } from "../../../salonDataSlice";
import { resetTicket } from "../../../customerSlice";
import { useEffect, useRef, useState } from "react";

export function SansPopup() {
  const salonData = useSelector((state) => state.salonData);
  const day = Date.find((obj) => obj.date === salonData.date).day;
  const [sansPopup, setSansPopup] = useState(false);
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSansPopup(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const Sans = Salons.filter(
    (salon) => salon.name === salonData.name && salon.date === salonData.date
  );
  const dispatch = useDispatch();
  return (
    <div ref={popupRef}>
      <div
        onClick={() => setSansPopup(!sansPopup)}
        className={styles.centerSide}
      >
        <FontAwesomeIcon icon={faClock} />
        <div>{`${day} ${salonData.date} - سانس ${salonData.time}`}</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {sansPopup && (
        <div className={styles.sansPopup}>
          {Sans.map((sans) => (
            <>
              <div className={styles.salonName}>{sans.salonName}</div>
              <div className={styles.sansList}>
                {sans.time.map((time) => (
                  <div
                    onClick={() => {
                      const chairs = SalonSeat.find(
                        (salon) =>
                          salon.cinema === salonData.cinemaName &&
                          salon.salonName === sans.salonName
                      ).chairs;
                      chairs.map((chair) =>
                        chair.status === "chosen"
                          ? (chair.status = "available")
                          : null
                      );
                      dispatch(changeSans(sans.salonName, time, chairs));
                      dispatch(resetTicket());
                      setSansPopup(!sansPopup);
                    }}
                    className={styles.sansBox}
                    style={
                      salonData.time === time &&
                      salonData.salonName === sans.salonName
                        ? { backgroundColor: "#e3e7eb" }
                        : null
                    }
                  >
                    <div className={styles.sansTime}>
                      <FontAwesomeIcon icon={faClock} />
                      <span>{`سانس ${time}`}</span>
                    </div>
                    <div className={styles.sansPrice}>
                      <FontAwesomeIcon icon={faMoneyBill} />
                      <span>{`${day === "سه شنبه" ? 30 : 60},000 تومان`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
