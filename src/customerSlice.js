const initialStateCustomer = {
  city: "",
  reservedTicket: [],
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/selectCity":
      return {
        ...state,
        city: action.payload,
      };
    case "customer/reserveTicket":
      return {
        ...state,
        reservedTicket: action.payload,
      };
    case "customer/unreserveTicket":
      return {
        ...state,
        reservedTicket: action.payload,
      };
    case "customer/resetTicket":
      return {
        ...state,
        reservedTicket: [],
      };
    default:
      return state;
  }
}
export function resetTicket() {
  return { type: "customer/resetTicket" };
}
export function selectCity(city) {
  return { type: "customer/selectCity", payload: city };
}
export function reserveTicket(ticket) {
  return { type: "customer/reserveTicket", payload: ticket };
}
export function unreserveTicket(ticket) {
  return { type: "customer/unreserveTicket", payload: ticket };
}
