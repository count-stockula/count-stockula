import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import BarcodeReader from 'react-barcode-reader'
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import InventoryForm from "../../components/Forms/InventoryForm";

export default class Inventory extends PureComponent {
  state = {
    showForm: true,
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
              <InventoryForm isFormShown={this.state.showForm}></InventoryForm>
            </div>
          </div>
          </div>
        
        <BottomBar />
      </>
    );
  }
}
