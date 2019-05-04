import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import BarcodeReader from "react-barcode-reader";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import InvForm2 from "../../components/Forms/InvForm2";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/SimpleInput";
import "../../components/Form/Form.css";
import "./Inventory.css";

export default class Inventory extends PureComponent {
  state = {
    store: {
      name: "Shops at East Peidmont",
      address: "230 E. Peiedmont Ave",
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
    qty: "",
    alertShown: false,
    errorMessage: "",
    buttonText: "OK",
    showUpcField: false,
    showCancel: false
  };

  componentWillMount = () => {
    API.authenticate()
      .then(results => this.setState({}))
      .catch(error => this.props.history.push("/"));
  };

  handleScan = data => {
    //data will be the upc
    API.findItemUpc("5cb3247aef86d68b5e0dc795", data)
      .then(retData => {
        this.setState(
          {
            showForm: true,
            upc: data,
            currentQty: parseInt(retData.data.currentQty),
            prodName: retData.data.name,
            description: retData.data.description,
            showUpcField: false,
            alertShown: false,
            showCancel: false
          },
          (this.componentDidUpdate = () => {
            let ind = document.getElementById("qty");
            ind.focus();
          })
        );
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
      upc: "",
      prodName: "",
      description: "",
      currentQty: 0,
      qty: 0,
      showForm: false,
      showUpcField: false,
      alertShown: false,
      showCancel: false
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
          alertShown: false,
          upc: "",
          prodName: "",
          description: "",
          qty: 0
        })
      )
      .catch(err => {
        this.setState({
          alertShown: true,
          errorMessage: `Error occured while updating inventory to the db, ${err}`,
          showCancel: false,
          showUpcField: false
        });
      });
  };
  modalViews = () => {
    return this.state.alertShown ? "modal modalOpen" : "modal";
  };
  hideModal = () => {
    if (this.state.showUpcField) {
      API.findItemUpc("5cb3247aef86d68b5e0dc795", this.state.upc)
        .then(retData => {
          this.setState(
            {
              showForm: true,
              upc: this.state.upc,
              currentQty: parseInt(retData.data.currentQty),
              prodName: retData.data.name,
              description: retData.data.description,
              showUpcField: false,
              alertShown: false,
              showCancel: false
            },
            (this.componentDidUpdate = () => {
              let ind = document.getElementById("qty");
              ind.focus();
            })
          );
        })
        .catch(err => {
          this.setState({
            errorMessage:
              "Failed to find scanned item with UPC number " +
              this.state.upc +
              " in the database",
            alertShown: true,
            showCancel: true
          });
        }); // added to resolve error
    } else {
      this.setState({
        upc: "",
        showForm: false,
        currentQty: "",
        prodName: "",
        description: "",
        qty: "",
        alertShown: false,
        errorMessage: "",
        buttonText: "OK",
        showUpcField: false,
        showCancel: false
      });
    }
  };
  cancelModal = () => {
    this.setState({
      alertShown: false,
      errorMessage: "",
      upc: "",
      showCancel: false
    });
  };
  evalCancelVisibillity = () => {
    return this.state.showCancel
      ? "modal-close waves-effect waves-grey btn-flat"
      : "hide";
  };
  manualEntry = () => {
    this.setState(
      {
        alertShown: true,
        errorMessage: "",
        buttonText: "OK",
        showUpcField: true,
        upc: "",
        showCancel: true
      },
      (this.componentDidUpdate = () => {
        let ind = document.getElementById("upc2");
        ind.focus();
      })
    );
  };
  render() {
    return (
      <>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <PageHeader title="Inventory" />
        <div className="row mainWrapper stretched">
          <div className="col red darken-4 inv centralContent">
            <h1
              className={this.state.showForm ? "scanText  hide" : "scanText"}
              onClick={this.manualEntry}
            >
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
            <Modal
              evalCancelVisibillity={this.evalCancelVisibillity}
              cancelModal={this.cancelModal}
              showEmailDialog={this.state.showUpcField}
              buttonText={this.state.buttonText}
              className={this.modalViews()}
              onClick={this.hideModal.bind(this)}
            >
              <p className="black-text">{this.state.errorMessage}</p>
              <div className={this.state.showUpcField ? "show" : "hide"}>
                <p className="black-text">Enter UPC:</p>
                <Input
                  textChangeFunc={this.handleChange}
                  value={this.state.upc}
                  id="upc2"
                  name="upc"
                  textalign="center"
                  required
                />
              </div>
            </Modal>
            {/* <div id="modal1" className={this.modalViews()}>
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
            </div> */}
          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}
