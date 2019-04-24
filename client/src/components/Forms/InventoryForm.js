import React from "react";
import "./Forms.css";

export default function (props) {

  return (
    <div className={props.isFormShown ? "formContainer" : "formContainer hide"} >
        <form className="col s12">
               <div className="row">
                    <div className="input-field col s12 m6">
                    <input readOnly value={props.prodName}  id="prodName" type="text" className="validate"></input>
                    <label htmlFor="prodName" className="active">Product Name</label>
                    </div>
                    <div className="input-field col s12 m6">
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
                    <div className="input-field col s12 m6">
                         <input readOnly value={props.currentQty} id="curruntQty" type="text" className="validate"></input>
                         <label htmlFor="curruntQty">Units Available</label>
                    </div>  
                    <div className="input-field col s12 m6">   
                         <input id="qty" name="qty" onKeyUp={props.handleChange} type="text" className="validate"></input>
                         <label  htmlFor="qty">Units Being Added:</label>        
                    </div>
               </div>
               <div className="input-field col s12 m6 center-align"><button className="btn black" onClick={props.saveInventory}>SAVE</button></div>
               <div className="input-field col s12 m6 center-align"><button className="btn black" onClick={props.cancelEntry}>CANCEL</button></div>
        </form>
    </div>
  )
}