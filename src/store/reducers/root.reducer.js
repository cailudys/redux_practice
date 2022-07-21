import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import modalReudcer from "./modal.reudcer";

// { counter: { count:0 }, model: { show: false } }
export default combineReducers({
  counter: counterReducer,
  modal: modalReudcer,
});
