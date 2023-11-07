import styles from "../MovieDetail.module.css";
import { SalonSeat, Salons } from "../../../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectSalon } from "../../../salonDataSlice";
import { Link } from "react-router-dom";

export default function MovieCinemaSans({ salon, movie, cinema }) {
  const currentDate = useSelector((state) => state.salonData.date);
  const activeSans = Salons.filter(
    (salonSans) => salonSans.salonName === salon
  ).find((curdate) => curdate.date === currentDate);
  const dispatch = useDispatch();
  return (
    <div>
      {activeSans && (
        <>
          <span className={styles.salonName}>{salon}</span>
          <div className={styles.sansList}>
            {activeSans.time.map((time) => {
              return (
                <Link
                  to={`/ticket/choose-seat/init/samfa/${movie.id}${activeSans.id}`}
                  onClick={() =>
                    dispatch(
                      selectSalon(
                        cinema.name,
                        activeSans.salonName,
                        time,
                        movie.id,
                        SalonSeat.find(
                          (obj) => obj.salonName === activeSans.salonName
                        ).chairs
                      )
                    )
                  }
                  key={time}
                  className={styles.Sans}
                >
                  <div>
                    <div className={styles.sans}>
                      <FontAwesomeIcon className={styles.icon} icon={faClock} />
                      <span>سانس {time}</span>
                    </div>
                    <div>60,000 تومان</div>
                  </div>
                  <button>
                    <FontAwesomeIcon icon={faTicket} />
                    <span>خرید بلیت</span>
                  </button>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
