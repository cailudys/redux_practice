import { takeEvery, put, delay } from "redux-saga/effects";
import { increment } from "../actions/counter.actions";
import { INCREMENT_ASYNC } from "../const/counter.const";
// takeEvery 接收action
// put 触发action

function* increment_async_fn(action) {
  yield delay(2000);
  yield put(increment(action.payload));
}

export default function* counterSaga() {
  // 接收action
  // takeEvery 方法的第一个参数
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn);
}
