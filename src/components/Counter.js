import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../store/actions/counter.actions";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <button onClick={() => increment(20)}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// 此函数要求返回值是一个对象，对象里的属性都会被映射到组件的props对象上
// 也就是说如果返回值是{a:1}  那么在Counter组件中就可以通过props.a取到1
const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
