import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../store/actions/counter.actions";

function Counter(props) {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <span>{props.count}</span>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

// 此函数要求返回值是一个对象，对象里的属性都会被映射到组件的props对象上
// 也就是说如果返回值是{a:1}  那么在Counter组件中就可以通过props.a取到1
const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(counterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
