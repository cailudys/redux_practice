import { createStore, applyMiddleware } from "redux";
import loggre from "./middlewares/logger";

createStore(reducer, applyMiddleware(loggre));
