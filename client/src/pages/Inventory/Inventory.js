import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import BarcodeReader from "react-barcode-reader";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import InventoryForm from "../../components/Forms/InventoryForm";
import InvForm2 from "../../components/Forms/InvForm2";
import "../../components/Form/Form.css";
import "./Inventory.css";

export default class Inventory extends PureComponent {
  state = {
    store: {
      name: "Shops at East Peidmont",
      address: " 230 E. Peiedmont Ave",
      city: "Norcross",
      state: "GA",
      zip: "30010",
      phone: "(770) 876-2201"
    },
    upc: "",
    showForm: false,
    currentQty: "",
    prodName: "",
    description: "",
    qty: ""
  };
  handleScan = data => {
    //data will be the upc
    API.findItemUpc("5cb3247aef86d68b5e0dc795", data)
      .then(retData => {
        this.setState({
          showForm: true,
          upc: data,
          currentQty: parseInt(retData.data.currentQty),
          prodName: retData.data.name,
          description: retData.data.description
        });
      })
      .catch(err => {
        this.setState({
          errorMessage:
            "Failed to find scanned item with UPC number " +
            data +
            " in the database",
          alertShown: true
        });
      });
  };
  cancelEntry = event => {
    event.preventDefault();
    this.setState({
      showForm: false,
      upc: 0,
      prodName: "",
      description: "",
      currentQty: 0,
      qty: 0
    });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  saveInventory = event => {
    event.preventDefault();
    API.addStock("5cb3247aef86d68b5e0dc795", this.state.upc, this.state.qty)
      .then(retVal =>
        this.setState({
          showForm: false,
          upc: "",
          prodName: "",
          description: "",
          qty: 0
        })
      )
      .catch(err => console.log(err));
  };
  modalViews = () => {
    return this.state.alertShown ? "modal modalOpen" : "modal";
  };
  hideModal = () => {
    this.setState({ alertShown: false, errorMessage: "" });
  };
  render() {
    return (
      <>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <PageHeader title="Inventory" />
        <div className="row mainWrapper stretched">
          <div className="col red darken-4 inv centralContent">
            <h1 className={this.state.showForm ? "scanText  hide" : "scanText"}>
              START SCANNING
              <br className="scanBreak" />
              TO ADD ITEM TO INVENTORY
            </h1>
            <div className={this.state.showForm ? "" : "hide"}>
              <InvForm2
                typingEvent={this.handleChange}
                upc={this.state.upc}
                cancelEntry={this.cancelEntry}
                prodName={this.state.prodName}
                description={this.state.description}
                currentQty={this.state.currentQty}
                qty={this.state.qty}
                saveClick={this.saveInventory}
              />
            </div>
            <div id="modal1" className={this.modalViews()}>
              <div className="modal-content">
                <p>{this.state.errorMessage}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="modal-close waves-effect waves-grey btn-flat"
                  onClick={this.hideModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}
