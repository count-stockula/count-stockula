import React from "react";
import "./Forms.css";
import Grid from '@material-ui/core/Grid';

export default function (props) {

  return (
    <div className={props.isFormShown ? "formContainer" : "formContainer hide"} >
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input disabled value="CocaCola" id="disabled" type="text" className="validate"></input>
              <label for="disabled">Product Name</label>
            </div>
            <div className="input-field col s12">
              <input disabled value="1234837" id="disabled" type="text" className="validate"></input>
              <label for="disabled">Product Code</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input disabled value="12 oz, regular flavor, can" id="disabled" type="text" className="validate"></input>
              <label for="disabled">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6">
              <input disabled value="10" id="disabled" type="text" className="validate"></input>
              <label for="disabled">Units Available</label>
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
                <input id="units_inline" type="text" className="validate"></input>
                <label id="plus_sign" htmlFor="units_inline">+</label>
              </div>
            </div>
            <div className="col s3"></div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <a class="waves-effect waves-light btn black white-text">SAVE</a>
            </div>
            <div className="input-field col s6">
              <a class="waves-effect waves-light btn black white-text">CANCEL</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}