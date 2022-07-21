import { DECREMENT, INCREMENT } from "../const/counter.const";

const initialState = {
  count: 0,
};

// 这是一个reducer函数，在createStore方法中会被回调，回调时会依次传入 state， action两个参数。
// 所以我们定义reducer函数的时候，就应该加上对应的形参，并在函数里面需要的地方使用这些形参。
// 差分后的reducer中只的state仅仅使自身的文件中的state。
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
