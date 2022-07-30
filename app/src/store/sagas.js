import { all } from "redux-saga/effects";
import customers from "../features/customers/sagas";

export default function* rootSaga() {
  yield all([customers()]);
}
