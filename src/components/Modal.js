import React from "react";
import { connect } from "react-redux";
import * as modalActions from "../store/actions/modal.actions";
import { bindActionCreators } from "redux";

function Modal({ show, showModal, hideModal }) {
  const styles = {
    width: 200,
    height: 200,
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: -100,
    marginTop: -100,
    backgroundColor: "skyblue",
    display: show ? "block" : "none",
  };

  return (
    <div>
      <button onClick={showModal}>显示</button>
      <button onClick={hideModal}>隐藏</button>
      <div style={styles}></div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  show: state.show,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(modalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
