import styles from "../ChooseSeatPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { Date } from "../../../Data";
import { chooseSeat } from "../../../salonDataSlice";
import { unreserveTicket } from "../../../customerSlice";

export function ChooseSeatPageTickets() {
  const salonData = useSelector((state) => state.salonData);
  const TicketData = useSelector((state) => state.customer.reservedTicket);
  const dispatch = useDispatch();
  const day = Date.find((obj) => obj.date === salonData.date).day;
  return (
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
                  const chair = chairs.find((chair) => chair === ticket);
                  chairs.find((chair) => chair === ticket).status = "available";
                  dispatch(
                    unreserveTicket(TicketData.filter((item) => item !== chair))
                  );
                  dispatch(chooseSeat(chairs));
                }}
              />
            </div>
            <div className={styles.price}>
              <FontAwesomeIcon icon={faTicket} />
              <span>{`${
                day === "سه شنبه" ? ticket.price / 2 : ticket.price
              },000 تومان`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
