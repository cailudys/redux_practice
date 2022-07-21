import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter from "./components/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0,
};

// 这是一个reducer函数，在createStore方法中会被回调，回调时会依次传入 state， action两个参数。
// 所以我们定义reducer函数的时候，就应该加上对应的形参，并在函数里面需要的地方使用这些形参。
function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

// 通过provider组件，将 store放在了全局组件可以够得到的地方。
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
