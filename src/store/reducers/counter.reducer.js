import { handleActions as createReducer } from "redux-actions";
import { increment } from "../actions/counter.actions";
import { decrement } from "../actions/counter.actions";

const initialState = {
  count: 0,
};

function handleIncrement(state, action) {
  return {
    ...state,
    count: state.count + action.payload,
  };
}

function handleDecrement(state, action) {
  return {
    ...state,
    count: state.count - action.payload,
  };
}

export default createReducer(
  {
    [increment]: handleIncrement,
    [decrement]: handleDecrement,
  },
  initialState
);
