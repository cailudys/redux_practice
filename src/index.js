import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 通过provider组件，将 store放在了全局组件可以够得到的地方。
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
