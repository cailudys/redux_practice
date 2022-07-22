import { takeEvery, put, delay } from "redux-saga/effects";
import { showModal } from "../actions/modal.actions";
import { SHOWMODAL_ASYNC } from "../const/modal.const";

function* showModal_async_fn(action) {
  yield delay(2000);
  yield put(showModal());
}

export default function* modalSaga() {
  // 接收action
  // takeEvery 方法的第一个参数
  yield takeEvery(SHOWMODAL_ASYNC, showModal_async_fn);
}
