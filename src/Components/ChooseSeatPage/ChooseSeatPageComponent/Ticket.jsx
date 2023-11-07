import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export default function Ticket({ ticketObj, onDeleteItem }) {
  return (
    <div className="ticket-box">
      <div className="ticket">
        <div className="ticket-row">
          ردیف <span>{ticketObj.row}</span>
        </div>{" "}
        .
        <div className="ticket-column">
          صندلی <span>{ticketObj.column}</span>
        </div>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="icon"
          onClick={() => {
            onDeleteItem(ticketObj);
          }}
        />
      </div>
      <div className="ticket-price">
        <div className="price">
          <FontAwesomeIcon className="icon" icon={faTicket} />
          <span>{ticketObj.price}</span>
        </div>
      </div>
    </div>
  );
}
