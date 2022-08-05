import { all, put, select, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { clear } from "../../../utilities/async_storage";

export function* watchClearCustomers() {
  yield takeLatest(actions.clearCustomers.toString(), takeClearCustomers);
}

export function* takeClearCustomers() {
  try {
    yield clear();

    yield put(actions.clearCustomersResult());
  } catch (error) {
    yield put(actions.clearCustomersResult());
  }
}
