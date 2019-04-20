import React from "react";
import "./Forms.css";

export default function (props) {

  return (
    <div className={props.isFormShown ? "formContainer ":"formContainer hide "}>
      <div className="row">
        <form className="col s12">
        <div className="row">
            <div className="input-field col s12">
              <input readOnly value={props.prodName}  id="prodName" type="text" className="validate"></input>
              <label htmlFor="prodName" className="active">Product Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input readOnly value={props.upc} id="upc" type="text" className="validate"></input>
              <label htmlFor="upc">Product Code</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input readOnly value={props.description}  id="desc" type="text" className="validate"></input>
              <label htmlFor="desc"  className="active">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input readOnly value={props.currentQty} id="curQty" type="text" className="validate"></input>
              <label htmlFor="curQty">Units Available</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              Units Being Added:
              <div className="input-field inline">
                <input id="units_inline" type="text" className="validate"></input>
                <label htmlFor="units_inline">+</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn white">SAVE</a>
            </div>
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn white" onClick={() => props.cancelEntry()}>CANCEL</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}