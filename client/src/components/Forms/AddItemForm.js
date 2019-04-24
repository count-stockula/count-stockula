import React from "react";
export default function AddItemForm (props) {
  return (
     
    <div className={props.isFormShown ? "formContainer" : "formContainer hide"} >
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="product_name" name="prodName" onChange={props.inputTyping} type="text" className="validate"></input>
              <label htmlFor="product_name">Product Name</label>
            </div>
            <div className="input-field col s6">
              <input defaultValue={props.upc} id="upc" type="text" className="validate"></input>
              <label htmlFor="upc">Product Code</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="description" name="description" onChange={props.inputTyping} type="text" className="validate"></input>
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="stock-level" name="criticalQty" onChange={props.inputTyping} type="text" className="validate"></input>
              <label htmlFor="stock-level">Critical Stock Level</label>
            </div>
            <div className="input-field col s6">
              <input id="case-size" name="caseSize" onChange={props.inputTyping} type="text" className="validate"></input>
              <label htmlFor="case-size">Default Case Size</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="units_text">
                Units Available:
            </div>
              <div className="input-field inline">
                <input id="units_inline" name="addedQty" onChange={props.inputTyping}  type="text" className="validate"></input>
                <label id="plus_sign" htmlFor="units_inline">+</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn black white-text" onClick={() => props.addItem()}>SAVE</a>
            </div>
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn black white-text" onClick={() => props.cancelEntry()}>CANCEL</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}