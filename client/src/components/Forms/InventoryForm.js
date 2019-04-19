import React from "react";
import "./Forms.css";
import Grid from '@material-ui/core/Grid';

export default function () {

  return (
    <div className="formContainer">
      <div className="row">
        <form className="col s12">
        <div className="row">
            <div className="input-field col s12">
              <input disabled value="CocaCola" id="disabled" type="text" className="validate"></input>
              <label for="disabled">Product Name</label>
            </div>
          </div>
          <div className="row">
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
            <div className="input-field col s12">
              <input disabled value="10" id="disabled" type="text" className="validate"></input>
              <label for="disabled">Units Available</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              Units Being Added:
              <div class="input-field inline">
                <input id="units_inline" type="text" class="validate"></input>
                <label for="units_inline">+</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <a class="waves-effect waves-light btn white">SAVE</a>
            </div>
            <div className="input-field col s6">
              <a class="waves-effect waves-light btn white">CANCEL</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}