import styles from "../ChooseSeatPage.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { Date } from "../../../Data";

export function ChooseSeatPageRegisterBtn() {
  const salonData = useSelector((state) => state.salonData);
  const TicketData = useSelector((state) => state.customer.reservedTicket);
  const day = Date.find((obj) => obj.date === salonData.date).day;
  let totalPrice = 0;
  TicketData.forEach(
    (ticket) =>
      (totalPrice =
        totalPrice +
        (day === "سه شنبه" ? Number(ticket.price) / 2 : Number(ticket.price)))
  );
  return (
    <div className={styles.registerBtn}>
      {TicketData.length === 0 ? (
        <div className={styles.noSeat}>!هنوز بلیتی را انتخاب نکرده اید</div>
      ) : (
        <div className={styles.ticketsInf}>
          <div className={styles.ticketNumber}>
            <span>{TicketData.length}</span>
            <FontAwesomeIcon icon={faChair} />
          </div>
          <div>{`${totalPrice},000 تومان`}</div>
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
  );
}
