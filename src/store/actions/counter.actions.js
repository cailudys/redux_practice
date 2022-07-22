import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "../const/counter.const";

export const increment = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});

// export const increment_async = (payload) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increment(payload));
//   }, 3000);
// };

// 这是要接收的异步的action
export const increment_async = () => ({ type: INCREMENT_ASYNC });
