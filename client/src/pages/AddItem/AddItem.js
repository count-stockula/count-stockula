import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import AddItem2 from "../../components/Forms/AddItemForm2"
import BarcodeReader from 'react-barcode-reader'
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import AddItemForm from "../../components/Forms/AddItemForm";

import "./AddItem.css";



export default class AddItem extends PureComponent {
  state = {
    showForm: false,
    upc:"",
    prodName:"",
    description:"",
    criticalQty:0,
    caseSize:0,
    addedQty:0,
    alertShown:false,
  } 
  cancelEntry = event =>{
       event.preventDefault();
     this.setState({showForm: false, upc:"", currentQty:"", prodName:""});
}     
  handleScan = data => {
    // this.setState({showForm: true, upc: data.trim()});
     API.findItemUpc("5cb3247aef86d68b5e0dc795", data.trim())
     .then(retData => {                  
          this.setState({alertShown:true, errorMessage:`The UPC number ${retData.data.upc} exists in the db as ${retData.data.name}. UPCs can not be duplicated. `}, console.log(this.state));
         
     })
     .catch(err => { 
          console.log(err)           
          if( err.message !== "Request failed with status code 404"){
               this.setState({alertShown:true, errorMessage:`Error connecting to db`})
               return;
          }
          this.setState({alertShown:false, showForm: true, upc: data.trim()});
     });
}
inputTyping = event => {
     const { name, value } = event.target;  
     console.log( name, value )        
     this.setState({
       [name]: value
     });    
};
addItem = event =>{
     event.preventDefault()
     let prodData ={
          upc:this.state.upc,
          name:this.state.prodName,
          description:this.state.description,
          criticalQty:this.state.criticalQty,
          currentQty:this.state.addedQty,
          alertStatus:false,
          storeId:"5cb3247aef86d68b5e0dc795",
     }
     console.log(this.state)
     API.createItem(prodData)               
     .then(retVal => this.setState({showForm: false, upc:"", prodName:"", description:"", qty:0 }))
     .catch(err => console.log(err));
}
modalViews = () => {     
     return this.state.alertShown ? "modal modalOpen" : "modal";
}
hideModal = () =>{
     this.setState({alertShown: false, errorMessage:""})
}
  render() {
    return (
      <>
          <BarcodeReader  onError={this.handleError} onScan={this.handleScan}/>
          <PageHeader title="Add Item" />          
          <div className="row mainWrapper stretched">    
               <div className="col s12 red darken-3 addItem centralContent">  
                    <h1 className={this.state.showForm ? "scanText  hide" : "scanText"}>START SCANNING
                    <br className="scanBreak"></br>
                    TO ADD NEW ITEM</h1>
                    {/* <div className={this.state.showForm ? "" : "hide"}>
                         <AddItemForm isFormShown={this.state.showForm}
                         upc= {this.state.upc}
                         cancelEntry = {this.cancelEntry}
                         inputTyping = {this.inputTyping}
                         addItem= {this.addItem}/>
                    </div> */}

                    <div className={this.state.showForm ? "" : "hide"}>
                         <AddItem2
                         upc={this.state.upc}
                         typingEvent = {this.inputTyping}
                         saveClick ={this.addItem}
                         cancelEntry = {this.cancelEntry}/>
                    </div>
               </div>
               <div id="modal1" className={this.modalViews()}>
                    <div className="modal-content">                         
                         <p>{this.state.errorMessage}</p>
                    </div>
                    <div className="modal-footer">
                         <button className="modal-close waves-effect waves-grey btn-flat" onClick={this.hideModal}>OK</button>
                    </div>
               </div>
        </div>
        <BottomBar />
      </>
    );
  }
}
