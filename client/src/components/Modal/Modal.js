import React from "react";
import "./modal.css";

export default function Modal(props) {
  return (
    <div id="modal1" className={props.className}>
      <div
        className={
          props.showEmailDialog ? "modal-content white-text" : "modal-content"
        }
      >
        {props.children}
      </div>
      <div className="modal-footer">
        <button
          className={
            props.showEmailDialog
              ? "modal-close waves-effect waves-grey btn-flat red darken-4"
              : "modal-close waves-effect waves-grey btn-flat"
          }
          onClick={props.onClick}
        >
          {props.buttonText}
        </button>
        <button
          className={
            props.evalCancelVisibillity === undefined
              ? "hide"
              : props.evalCancelVisibillity()
          }
          onClick={props.cancelModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
