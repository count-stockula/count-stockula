import React from 'react';
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import SimpleInput from "../Input/SimpleInput";
import "./Forms.css";

export default function SettingsForm(props) {
let initialStore=props.storeId;
  return (
    <Form id="aForm">
      <div className="col s12 m6">
        <div className="input-container">
          <i className="fas fa-user icon"></i>
          <SimpleInput type="text"
            textChangeFunc={props.typingEvent}
            id="userName"
            name="userName"
            value={props.userName}
          ></SimpleInput>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="input-container">
          <select name="storeId"
            value={initialStore._id}
            onChange={props.selectStore}
            className="storeDropdown">
            {props.theStores.map(item => (
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="col s12 m12">
        <div className="input-container">
          <i className="fas fa-envelope icon"></i>
          <SimpleInput type="text"
            textChangeFunc={props.typingEvent}
            id="email"
            name="email"
            value={props.email} />
        </div>
      </div>
      <div className="col s12 m12">
        <div className="input-container">
          <i className="fas fa-phone icon"></i>
          <SimpleInput type="text"
            textChangeFunc={props.typingEvent}
            name="phoneNo"
            value={props.phoneNo}
            id="phoneNo"
          ></SimpleInput>
        </div>
      </div>
      <div className="col s12 m12 center-align">
        <div className="input-field col s6 m6 center-align">
          <Link to="/Scan"><button className="btn black">Cancel</button></Link>
        </div>
        <div className="input-field col s6 m6 center-align">
          <button className="btn black" onClick={props.saveClick}>Save</button>
        </div>
      </div>
    </Form>
  )
}