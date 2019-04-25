import React from 'react';
import Form from "../Form/Form";
import Input from "../Input/Input";
import Label from "../Label/Label";

export default function SettingsForm(props) {
    return (
        <Form id="aForm">
            <div className="col s12 m6">
                <Label labValue="Username" htmlFor="userName" className="active" />
                <Input type="text"
                    id="userName"
                    name="userName"
                    defaultValue={props.userName}
                ></Input>
            </div>
            <div className="col s12 m6">
                <Label labValue="Store No." htmlFor="storeNo" className="active" />
                
            </div>
            <div className="col s12 m12">
                <Label labValue="Email" htmlFor="email" />
                {/* <textarea type="text" id="description" name="description" className="materialize-textarea" defaultValue={props.description}></textarea> */}
                <Input type="text"
                    id="email"
                    name="email"
                    defaultValue={props.email} />
            </div>
            <div className="col s12 m12">
                <Label labValue="Phone No." htmlFor="phoneNo" className="active" />
                <Input type="text"
                    name="phoneNo"
                    defaultValue={props.phoneNo}
                    id="phoneNo"
                ></Input>
            </div>
            <div className="col s12 m12 center-align">
                <div className="input-field col s6 m6 center-align">
                    <button className="btn black" onClick={props.cancelEntry}>Cancel</button>
                </div>
                <div className="input-field col s6 m6 center-align">
                    <button className="btn black" onClick={props.saveClick}>Save</button>
                </div>
            </div>
        </Form>
    )
}