import styles from "./ChooseSeatPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faHeart,
  faLocationDot,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { Date, Movie, statusList } from "../../Data";
import { chooseSeat } from "../../salonDataSlice";

export default function ChooseSeatPage() {
  const [TicketData, setTicketData] = useState([]);

  const salonData = useSelector((state) => state.salonData);
  const dispatch = useDispatch();
  const day = Date.find((obj) => obj.date === salonData.date).day;
  const columns = Math.max(...salonData.chairs.map((el) => Number(el.column)));
  const movie = Movie.find((movie) => movie.id === salonData.movieId);

  return (
    <div className={styles.chooseSeatPage}>
      <header>
        <Link to="/" className={styles.rightSide}>
          <svg viewBox="0 0 113 40">
            <text>سینماتیکت</text>
            <g>
              <path d="M74.629 12.009a1.761 1.761 0 1 0-1.653-1.757 1.71 1.71 0 0 0 1.653 1.757m-25.566-.5a1.761 1.761 0 1 0-1.655-1.758 1.708 1.708 0 0 0 1.655 1.758m-3.8 0a1.761 1.761 0 1 0-1.656-1.758 1.708 1.708 0 0 0 1.656 1.758m-31.05-.1a1.761 1.761 0 1 0-1.655-1.758 1.71 1.71 0 0 0 1.655 1.758m-3.8 0a1.761 1.761 0 1 0-1.655-1.758 1.71 1.71 0 0 0 1.655 1.758m71.508 17.549a1.761 1.761 0 1 0 1.655 1.759 1.708 1.708 0 0 0-1.655-1.759m-3.8 0a1.761 1.761 0 1 0 1.65 1.76 1.71 1.71 0 0 0-1.655-1.759m-38.081 0a1.761 1.761 0 1 0 1.654 1.759 1.709 1.709 0 0 0-1.654-1.759m-3.8 0a1.761 1.761 0 1 0 1.655 1.759 1.709 1.709 0 0 0-1.655-1.759"></path>
              <path d="M107.29 14.051a1.446 1.446 0 0 0-1.406 1.482l-.008 5.065a2.837 2.837 0 0 1-2.8 2.9 24.788 24.788 0 0 1-17.7-9.433h-1.7a1.376 1.376 0 0 0-1 .435 1.514 1.514 0 0 0-.41 1.047l-.01 5.1a2.759 2.759 0 1 1-5.509 0l.008-5.1a1.515 1.515 0 0 0-.407-1.048 1.377 1.377 0 0 0-1-.439h-1.7v.879a5.678 5.678 0 0 0-2.865-.78 6.143 6.143 0 0 0-5.955 6.3c0 .046.005.092.006.139a2.825 2.825 0 0 1-2.934 2.876 2.926 2.926 0 0 1-2.568-3.012V6.051a.879.879 0 0 0-.237-.607.8.8 0 0 0-.578-.253h-1.47a.839.839 0 0 0-.815.86V20.4c0 3.465 2.679 6.415 5.956 6.358a5.707 5.707 0 0 0 4.232-2.038 5.713 5.713 0 0 0 8.719.036 5.7 5.7 0 0 0 4.367 2.083 6.038 6.038 0 0 0 5.856-6.192v-1.97c5.879 5.544 15.509 9.114 19.34 7.886v-.006a6.154 6.154 0 0 0 4.272-5.956l.012-6.548h-1.7zm-36.5 9.428a2.933 2.933 0 0 1-2.849-2.88v-.035c0-.036-.005-.069-.005-.1a2.86 2.86 0 1 1 2.855 3.02m-21.284-7.951l-.007 5.079a2.76 2.76 0 1 1-5.512 0L44 15.541a1.5 1.5 0 0 0-.855-1.369 1.345 1.345 0 0 0-.547-.118h-1.7l-.01 6.559a2.835 2.835 0 0 1-2.922 2.953 2.806 2.806 0 0 1-2.423-1.9 8.5 8.5 0 0 1-.291-1.6 6.08 6.08 0 0 0-1.194-2.644L30.7 13.2l5.471-5.452a.846.846 0 0 0 .029-1.153l-1.017-1.147a.738.738 0 0 0-1.083-.036l-6.535 6.511.012.014a1.662 1.662 0 0 0-.1 2.188c3.567 4.6 4.778 5.269 4.788 6.559a2.782 2.782 0 0 1-2.382 2.816 2.818 2.818 0 0 1-3.118-2.889l.008-5.061a1.447 1.447 0 0 0-1.4-1.486h-1.7A24.791 24.791 0 0 1 5.972 23.5a2.837 2.837 0 0 1-2.8-2.9l-.012-5.1a1.446 1.446 0 0 0-1.406-1.482h-1.7L.068 20.6a6.154 6.154 0 0 0 4.274 5.956v.006c3.828 1.227 13.448-2.335 19.325-7.873v1.922a6 6 0 0 0 5.854 6.189 5.482 5.482 0 0 0 4.254-2 5.669 5.669 0 0 0 8.661 0 5.7 5.7 0 0 0 4.305 2.01 6.037 6.037 0 0 0 5.859-6.198l.011-6.559h-1.7a1.446 1.446 0 0 0-1.406 1.482"></path>
            </g>
          </svg>
        </Link>
        <div className={styles.centerSide}>
          <FontAwesomeIcon icon={faClock} />
          <div>{`${day} ${salonData.date} - سانس ${salonData.time}`}</div>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className={styles.leftSide}>
          <img src="/images/profile.svg" alt="profile" />
          <span>پروفایل</span>
        </div>
      </header>
      <div className={styles.mainFooter}>
        <main>
          <div
            className={styles.cinemaScreen}
            style={{ width: 30 * columns + (columns - 1) * 15 }}
          >
            صحنه اجرا
          </div>
          <div
            className={styles.chairs}
            style={{
              gridTemplateColumns: `repeat(${columns} , 1fr)`,
              width: 30 * columns + (columns - 1) * 15,
            }}
          >
            {salonData.chairs.map((chair, i) => {
              return (
                <div
                  className={styles.chair}
                  style={{
                    backgroundColor:
                      chair.column === "0"
                        ? "none"
                        : statusList.find(
                            (obj) => obj.status === salonData.chairs[i].status
                          ).color,
                    pointerEvents: chair.column === "0" ? "none" : "all",
                  }}
                  onClick={() => {
                    const chair = [...salonData.chairs];
                    if (
                      chair[i].status === "available" &&
                      TicketData.length < 10
                    ) {
                      chair[i].status = "chosen";
                      setTicketData((items) => [...items, chair[i]]);
                    } else if (chair[i].status === "chosen") {
                      chair[i].status = "available";
                      setTicketData((items) =>
                        items.filter((item) => item !== chair[i])
                      );
                    } else if (
                      chair[i].status === "available" &&
                      TicketData.length === 10
                    ) {
                      alert("در هر خرید، تا سقف 10 بلیت می توانید انتخاب کنید");
                    }
                    dispatch(chooseSeat(chair));
                  }}
                >
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
                    <div className={styles.price}>{chair.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
        <footer>
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
                      statusList.find((el) => el.status === "soldOut").color
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
                    backgroundColor: statusList.find(
                      (el) => el.status === "chosen"
                    ).color,
                  }}
                />
                <span>انتخاب شما</span>
              </div>
            </div>
            <div className={styles.capacity}>
              ظرفیت سالن:
              {` ${
                salonData.chairs.filter(
                  (el) => el.status === "available" || el.status === "chosen"
                ).length
              }`}
            </div>
          </div>
          <div className={styles.infMovieTicket}>
            <div className={styles.infMovie}>
              <img
                src={`/images/${movie.section}/${movie.name}/poster.webp`}
                alt={movie.name}
              />
              <div className={styles.infBox}>
                <span className={styles.movieName}>{movie.name}</span>
                <div className={styles.cinemaLocation}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div>
                    <strong>{salonData.cinemaName}</strong>
                    {` (${salonData.salonName})`}
                  </div>
                </div>
                <div className={styles.ticketTime}>
                  <FontAwesomeIcon icon={faClock} />
                  <div>{`${day} ${salonData.date} - سانس ${salonData.time}`}</div>
                </div>
              </div>
            </div>
            <div className={styles.tickets}>
              {TicketData.map((ticket, i) => {
                return (
                  <div key={i} className={styles.ticketBox}>
                    <div className={styles.ticket}>
                      <div>
                        ردیف <b className={styles.dot}>{ticket.row}</b>صندلی{" "}
                        <b>{ticket.column}</b>
                      </div>
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className={styles.icon}
                        onClick={() => {
                          const chairs = [...salonData.chairs];
                          const chair = chairs.find(
                            (chair) => chair === ticket
                          );
                          chairs.find((chair) => chair === ticket).status =
                            "available";
                          setTicketData((items) =>
                            items.filter((item) => item !== chair)
                          );
                          dispatch(chooseSeat(chairs));
                        }}
                      />
                    </div>
                    <div className={styles.price}>
                      <FontAwesomeIcon icon={faTicket} />
                      <span>{ticket.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.registerBtn}>
              {TicketData.length === 0 ? (
                <div className={styles.noSeat}>
                  !هنوز بلیتی را انتخاب نکرده اید
                </div>
              ) : (
                <div className={styles.ticketsInf}>
                  <div className={styles.ticketNumber}>
                    <span>{TicketData.length}</span>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div>{`${60 * TicketData.length},000 تومان`}</div>
                </div>
              )}
              <button
                style={{
                  backgroundColor: TicketData.length === 0 ? "#aaa" : "#ff3543",
                }}
              >
                ثبت صندلی و نمایش جزئیات
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
