import React from 'react';
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/SimpleInput";
import Label from "../Label/Label";
import "./Forms.css";

export default function SettingsForm(props) {

  return (
    <Form id="aForm">
      <div className="col s12 m6">
        <Label labValue="Username" htmlFor="userName" className="active" />
        <Input type="text"
          icon="fas fa-user icon"
          type="text"
          className="validate"
          id="userName"
          name="userName"
          onChange={this.handleChange}
          defaultValue={props.userName}
        ></Input>
      </div>
      <div className="col s12 m6">
        <Label labValue="Store No." htmlFor="storeNo" className="active" />
        <select name="storeId"
          onChange={props.selectStore}
          className="storeDropdown">
          {props.theStores.map(item => (
            <option key={item._id} value={item._id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="col s12 m12">
        <Label labValue="Email" htmlFor="email" />
        {/* <textarea type="text" id="description" name="description" className="materialize-textarea" defaultValue={props.description}></textarea> */}
        <Input type="text"
          textChangeFunc={props.typingEvent}
          id="email"
          name="email"
          defaultValue={props.email} />
      </div>
      <div className="col s12 m12">
        <Label labValue="Phone No." htmlFor="phoneNo" className="active" />
        <Input type="text"
          textChangeFunc={props.typingEvent}
          name="phoneNo"
          defaultValue={props.phoneNo}
          id="phoneNo"
        ></Input>
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