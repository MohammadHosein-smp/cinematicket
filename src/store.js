import { combineReducers, createStore } from "redux";
import salonDataReducer from "./salonDataSlice";
import customerReducer from "./customerSlice";

const rootReducer = combineReducers({
  salonData: salonDataReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
