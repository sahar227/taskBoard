import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import ResourceRemove from "./components/ResourceRemove";
import "./styles/Modal.css";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="modal">
      <div onClick={e => e.stopPropagation()} className="modal-dialog">
        <div className="modal-header">
          <ResourceRemove onRemove={props.onDismiss} />
          {props.title}
        </div>
        <div className="modal-content">
          {props.content}
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
        </div>
        <div className="modal-actions">{props.actions}</div>
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
