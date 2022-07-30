import { combineReducers } from "redux";
import customers from "../features/customers/reducers";

const rootReducer = combineReducers({
  customers,
});

export default rootReducer;
