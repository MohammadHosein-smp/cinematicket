import styles from "../ChooseSeatPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { statusList } from "../../../Data";
import { chooseSeat } from "../../../salonDataSlice";
import { reserveTicket, unreserveTicket } from "../../../customerSlice";
import { ChairPopup } from "./ChairPopup";

export function ChooseSeatPageMain() {
  const salonData = useSelector((state) => state.salonData);
  const TicketData = useSelector((state) => state.customer.reservedTicket);
  const columns = Math.max(...salonData.chairs.map((el) => Number(el.column)));
  const dispatch = useDispatch();
  return (
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
                pointerEvents:
                  salonData.chairs[i].status === "available" ||
                  salonData.chairs[i].status === "chosen"
                    ? "all"
                    : "none",
                border:
                  salonData.chairs[i].status === "soldOut"
                    ? "3px solid #555f6d"
                    : "none",
              }}
              onClick={() => {
                const chair = [...salonData.chairs];
                if (chair[i].status === "available" && TicketData.length < 10) {
                  chair[i].status = "chosen";
                  dispatch(reserveTicket([...TicketData, chair[i]]));
                } else if (chair[i].status === "chosen") {
                  chair[i].status = "available";
                  dispatch(
                    unreserveTicket(
                      TicketData.filter((item) => item !== chair[i])
                    )
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
              <ChairPopup chair={chair} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
