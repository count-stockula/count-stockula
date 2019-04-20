import React from "react";
import "./Forms.css";
import Grid from '@material-ui/core/Grid';

export default function (props) {

  return (
    <div className={props.isFormShown ? "formContainer" : "formContainer hide"} >
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="product_name" type="text" className="validate"></input>
              <label htmlFor="product_name">Product Name</label>
            </div>
            <div className="input-field col s6">
              <input disabled value="1234837" id="disabled" type="text" className="validate"></input>
              <label htmlFor="disabled">Product Code</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="description" type="text" className="validate"></input>
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="stock-level" type="text" className="validate"></input>
              <label htmlFor="stock-level">Critical Stock Level</label>
            </div>
            <div className="input-field col s6">
              <input id="case-size" type="text" className="validate"></input>
              <label htmlFor="case-size">Default Case Size</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="units_text">
                Units Available:
            </div>
              <div className="input-field inline">
                <input id="units_inline" type="text" className="validate"></input>
                <label id="plus_sign" htmlFor="units_inline">+</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn black white-text">SAVE</a>
            </div>
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn black white-text">CANCEL</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}