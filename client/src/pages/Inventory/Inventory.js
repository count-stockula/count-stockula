import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import BarcodeReader from 'react-barcode-reader'
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import InventoryForm from "../../components/Forms/InventoryForm";

export default class Inventory extends PureComponent {
     state={
          store:{
               name:"Shops at East Peidmont",
               address: " 230 E. Peiedmont Ave",
               city:"Norcross",
               state:"GA",
               zip:"30010",
               phone:"(770) 876-2201"
          },
          upc:"1234567",
          showForm:true,
          currentQty:0,
          prodName:"",
          description:""
     }
     handleScan = data => {           
          console.log(data);
          //data will be the upc
          API.findItemUpc("5cb3247aef86d68b5e0dc795", data)
          .then(retData => {
               this.setState({showForm: true, upc:data, currentQty:retData.data.currentQty, prodName:retData.data.name, description:retData.data.description});
               
          })
          .catch(err => {
               this.setState({
                    errorMessage: "Failed to find scanned item in the database",
                    alertShown: true
               });
          });
     }
     cancelEntry = () =>{
          this.setState({showForm: false, upc:"", currentQty:"", prodName:""});
     }


  render() {
    return (
      <>
      <BarcodeReader  onError={this.handleError} onScan={this.handleScan}/>
        <PageHeader title="Inventory" />
        <div className="container px-0 w-100 d-flex">
          <div className="mx-auto col-10 col-lg-6 col-md-6 col-sm-10 col-xl-6 px-0">
            <div className="scanContainer">
              <h1 className={this.state.showForm ? "scanText  hide" : "scanText"}>START SCANNING
               <br className="scanBreak"></br>
                TO ADD ITEM TO INVENTORY
              </h1>
              <InventoryForm isFormShown={this.state.showForm} 
                         upc={this.state.upc} 
                         currentQty={this.state.currentQty} 
                         prodName={this.state.prodName}
                         description={this.state.description}
                         cancelEntry={this.cancelEntry}>
                         </InventoryForm>

            </div>
          </div>
          </div>
        
        <BottomBar />
      </>
    );
  }
}