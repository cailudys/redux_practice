import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root.reducer";
// import logger from "./middleware/logger";
// import text from "./middleware/text";
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import counterSaga from "./sagas/counter.saga";

// 创建sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// 多个中间件的执行顺序取决于在applyMiddleware方法中注册的顺序。
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// 启动该 counterSaga
sagaMiddleware.run(counterSaga);
