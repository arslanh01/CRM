import { combineReducers } from "redux";
import customers from "../features/customers/reducers";
// import habitat from '../features/habitat/reducers'

const rootReducer = combineReducers({
  customers,
  // habitat
});

export default rootReducer;
