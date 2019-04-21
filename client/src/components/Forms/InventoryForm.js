import React from "react";
import "./Forms.css";

export default function (props) {

  return (
    <div className={props.isFormShown ? "formContainer" : "formContainer hide"} >
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input readOnly value={props.prodName}  id="prodName" type="text" className="validate"></input>
              <label htmlFor="prodName" className="active">Product Name</label>
            </div>
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
            <div className="col s3"></div>
            <div className="input-field col s6">
              <input disabled value={props.currentQty} id="disabled" type="text" className="validate"></input>
              <label htmlFor="disabled">Units Available</label>
            </div>
            <div className="col s3"></div>
          </div>
          <div className="row">
          <div className="col s3"></div>
            <div className="col s6">
              <div className="units_text">
                Units Being Added:
            </div>
              <div className="input-field inline">
                <input id="units_inline" name="qty" onKeyUp={props.handleChange} type="text" className="validate"></input>
                <label id="plus_sign" htmlFor="units_inline">+</label>
              </div>
            </div>
            <div className="col s3"></div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn black white-text" onClick={() => props.saveInventory()}>SAVE</a>
            </div>
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn black white-text" onClick={() => props.cancelEntry()}>CANCEL</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}