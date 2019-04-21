import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
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
    addedQty:0
  } 
  cancelEntry = () =>{
     this.setState({showForm: false, upc:"", currentQty:"", prodName:""});
}     
  handleScan = data => {
     this.setState({showForm: true, upc: data.trim()});
     // API.findItemUpc("5cb3247aef86d68b5e0dc795", data)
     // .then(retData => {
     //      console.log(retData.data)        
          
     // })
     // .catch(err => {
     //      this.setState({
     //           errorMessage: "Failed to find scanned item in the database",
     //           alertShown: true
     //      });
     // });
}
inputTyping = event => {
     const { name, value } = event.target;          
     this.setState({
       [name]: value
     });    
};
addItem = () =>{
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
  render() {
    return (
      <>
      <BarcodeReader  onError={this.handleError} onScan={this.handleScan}/>
        <PageHeader title="Add Item" />
        <div className="container px-0 w-100 d-flex">
          <div className="mx-auto col-10 col-lg-6 col-md-6 col-sm-10 col-xl-6 px-0">
            <div className="scanContainer">
              <h1 className={this.state.showForm ? "scanText  hide" : "scanText"}>START SCANNING
               <br className="scanBreak"></br>
                TO ADD NEW ITEM
              </h1>
              <AddItemForm isFormShown={this.state.showForm}
                    upc= {this.state.upc}
                    cancelEntry = {this.cancelEntry}
                    inputTyping = {this.inputTyping}
                    addItem= {this.addItem}
              ></AddItemForm>
            </div>
          </div>
          </div>
        <BottomBar />
      </>
    );
  }
}
