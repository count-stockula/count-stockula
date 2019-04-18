import React from "react";
import "./AddItemForm.css";
import Grid from '@material-ui/core/Grid';

export default function () {

  return (
    <div className="formContainer">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate"></input>
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate"></input>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input disabled value="I am not editable" id="disabled" type="text" className="validate"></input>
              <label for="disabled">Disabled</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              This is an inline input field:
              <div className="input-field inline">
                <input id="email_inline" type="email" className="validate"></input>
                <label for="email_inline">Email</label>
                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}