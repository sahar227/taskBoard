import React from "react";
import ReactDOM from "react-dom";
import history from "./history";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

Modal.defaultProps = {
  title: "Add Modal header",
  content: "Add Modal content",
  actions: "Add your action component here",
  onDismiss: () => history.push("/")
};

export default Modal;
