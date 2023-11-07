import { Date } from "./Data";

const initialStateSalonData = {
  cinemaName: "",
  salonName: "",
  date: Date[0].date,
  time: "",
  movieId: "",
  chairs: [],
  tickets: [],
};

export default function salonDataReducer(
  state = initialStateSalonData,
  action
) {
  switch (action.type) {
    case "salonData/setCurrentDate":
      return { ...state, date: action.payload };
    case "salonData/selectSalon":
      return {
        ...state,
        cinemaName: action.payload.cinema,
        salonName: action.payload.name,
        time: action.payload.time,
        movieId: action.payload.movieId,
        chairs: action.payload.chairs,
      };
    case "salonData/chooseSeat":
      return { ...state, chairs: action.payload };
    default:
      return state;
  }
}

export function chooseSeat(chairs) {
  return { type: "salonData/chooseSeat", payload: chairs };
}

export function setCurrentDate(date) {
  return { type: "salonData/setCurrentDate", payload: date };
}

export function selectSalon(cinema, name, time, movieId, chairs) {
  return {
    type: "salonData/selectSalon",
    payload: { cinema, name, time, movieId, chairs },
  };
}
