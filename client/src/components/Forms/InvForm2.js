import React from 'react';
import Form from "../Form/Form";
import Input from "../Input/Input";
import Label from "../Label/Label";

export default function InvForm2(props) {
     return (
          <Form id="aForm">
               <div className="col s12 m6">
                    <Label labValue="Name" htmlFor="prodName" className="active"/>
                    <Input type="text"
                    id="prodName"
                    name="prodName"
                    defaultValue={props.prodName}
                    ></Input>
               </div>
               <div className="col s12 m6">
                    <Label labValue="UPC" htmlFor="upc" className="active"/>
                    <Input type="text"
                    readOnly={true}
                    defaultValue={props.upc}
                    id="upc"
                    validate="true"
                    ></Input>
               </div>
               <div className="col s12">
                    <Label labValue="Description" htmlFor="description"/>
                    {/* <textarea type="text" id="description" name="description" className="materialize-textarea" defaultValue={props.description}></textarea> */}
                    <Input type="text"
                    id="description"
                    name="description"
                    defaultValue={props.description} />
               </div>
               <div className="col s12 m6">
                    <Label labValue="Current Quantity" htmlFor="currentQty" className="active"/>
                    <Input type="text"
                    name="currentQty"
                    defaultValue={props.currentQty}
                    id="currentQty"
                    ></Input>
               </div>
               <div className="col s12 m6">
                    <Label labValue="Units Added" htmlFor="addedQty" className="active"/>
                    <Input type="number"
                    textChangeFunc = {props.typingEvent}
                    defaultValue={props.qty}
                    id="qty"
                    name="qty"
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