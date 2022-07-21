import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root.reducer";
import logger from "./middleware/logger";
import text from "./middleware/text";
import thunk from "./middleware/thunk";

// 多个中间件的执行顺序取决于在applyMiddleware方法中注册的顺序。
export const store = createStore(
  rootReducer,
  applyMiddleware(logger, text, thunk)
);
