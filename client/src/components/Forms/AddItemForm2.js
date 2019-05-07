import React from 'react';
import Form from "../Form/Form";
import Input from "../Input/SimpleInput";
import Label from "../Label/Label";


export default function AddItemForm2 (props) {
     return (
          <Form id="aForm">
               <div className="col s12">
                  <Label labValue="Product Name" htmlFor="prodName" className="active"/>
                  <Input type="text"
                  id="prodName"
                  name="prodName"
                  value={props.prodName}
                  textChangeFunc={props.typingEvent}
                  />
               </div>
               <div className="col s12 m6">
                <Label labValue="UPC" htmlFor="upc" className="active"/>
                <Input type="text"
                id="upc"
                name="upc"
                value={props.upc}
                textChangeFunc={props.typingEvent}/>
               </div>
               <div className="col s12 m6 center">
                  <Label labValue="Non Scannable Item" htmlFor="upc" className="active"/>
                  <div className="switch">
                    <label>
                      False
                      <input type="checkbox" onChange={props.onChange} checked={props.noScan}/>
                      <span className="lever"></span>
                      True
                    </label>
                    </div>
               </div>
               <div className="col s12"> 
                    <Label labValue="Description" htmlFor="description"/>
                    {/* <textarea type="text" id="description" name="description" className="materialize-textarea" defaultValue={props.description}></textarea> */}
                    <Input type="text"
                    id="description"
                    name="description"
                    value={props.description}
                    textChangeFunc={props.typingEvent}/>
               </div>
               <div className="col s12 m6">
                    <Label labValue="Critical Quantity" htmlFor="criticalQty" className="active"/>
                    <Input type="number"
                    id="criticalQty"
                    name="criticalQty"
                    value={props.criticalQty}
                    textChangeFunc={props.typingEvent}/>
               </div>
               <div className="col s12 m6">
               <Label labValue="Case Size" htmlFor="caseSize" className="active"/>
                    <Input type="number"
                    id="caseSize"
                    name="caseSize"
                    value={props.caseSize}
                    textChangeFunc={props.typingEvent}/>
               </div>
               <div className="col s12 m6 offset-m3">
                    <Label labValue="Units Available" htmlFor="addedQty"/>
                    {/* <textarea type="text" id="description" name="description" className="materialize-textarea" defaultValue={props.description}></textarea> */}
                    <Input type="number"
                    id="addedQty"
                    name="addedQty"
                    value={props.addedQty}
                    textChangeFunc={props.typingEvent}/>
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