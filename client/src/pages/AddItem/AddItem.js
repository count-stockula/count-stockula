import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import AddItem2 from "../../components/Forms/AddItemForm2";
import BarcodeReader from "react-barcode-reader";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import Input from "../../components/Input/SimpleInput";

import "./AddItem.css";

export default class AddItem extends PureComponent {
  state = {
    showForm: false,
    upc: "",
    prodName: "",
    description: "",
    criticalQty: 0,
    caseSize: 0,
    addedQty: 0,
    alertShown: false,
    errorMessage: "",
    buttonText: "OK",
    showUpcField: false,
    showCancel: false,
    noScan: true
  };

  componentWillMount = () => {
    API.authenticate()
      .then(results => this.setState({}))
      .catch(error => this.props.history.push("/"));
  };

  cancelEntry = event => {
    event.preventDefault();
    this.setState({
      showForm: false,
      upc: "",
      currentQty: "",
      prodName: ""
    });
  };
  handleScan = data => {
    this.setState({
      //showForm: true,
      upc: data.trim()
    });
    API.findItemUpc("5cb3247aef86d68b5e0dc795", data.trim())
      .then(retData => {
        this.setState({
          alertShown: true,
          errorMessage: `The UPC number ${
            retData.data.upc
          } exists in the db as ${
            retData.data.name
          }. UPCs can not be duplicated. `,
          showUpcField: false,
          showForm: false
        });
      })
      .catch(err => {
        if (err.message !== "Request failed with status code 404") {
          this.setState({
            alertShown: true,
            errorMessage: `Error connecting to db`,
            buttonText: "OK",
            showUpcField: false,
          });
          return;
        }
        this.setState(
          {
            alertShown: false,
            showForm: true,
            upc: data.trim(),
            prodName: "",
            description: "",
            criticalQty: 0,
            caseSize: 0,
            addedQty: 0
          },
          () => {
            let inputField = document.getElementById("prodName");
            inputField.focus();
          }
        );
      });
  };
  inputTyping = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  addItem = event => {
    event.preventDefault();
    let prodData = {
      upc: this.state.upc,
      name: this.state.prodName,
      description: this.state.description,
      criticalQty: this.state.criticalQty,
      currentQty: this.state.addedQty,
      alertStatus: false,
      storeId: "5cb3247aef86d68b5e0dc795",
      noScan: this.state.noScan
    };
    API.createItem(prodData)
      .then(retVal =>
        this.setState({
          showForm: false,
          upc: "",
          prodName: "",
          description: "",
          qty: 0
        })
      )
      .catch(err => {
        this.setState({
          alertShown: true,
          errorMessage: `Error occured while saving to the db, ${err}`,
          showCancel: false,
          showUpcField: false
        });
        // handle failed token auth
        //.catch(error => this.props.history.push("/"));
      });
  };
  evalCancelVisibillity = () => {
    return this.state.showCancel
      ? "modal-close waves-effect waves-grey btn-flat"
      : "hide";
  };
  modalViews = () => {
    return this.state.alertShown ? "modal modalOpen modalDismissable" : "modal";
  };
  hideModal = () => {
    if (this.state.showUpcField) {
      API.findItemUpc("5cb3247aef86d68b5e0dc795", this.state.upc)
        .then(retData => {
          this.setState({
            alertShown: true,
            errorMessage: `The UPC number ${
              retData.data.upc
            } exists in the db as ${
              retData.data.name
            }. UPCs can not be duplicated. `,
            showCancel: true
          });
        })
        .catch(err => {
          if (err.message !== "Request failed with status code 404") {
            this.setState({
              alertShown: true,
              errorMessage: `Error connecting to db`,
              showCancel: true
            });
            return;
          }
          this.setState(
            {
              alertShown: false,
              showForm: true,
              //upc: this.state.upc.trim(),
              showCancel: true,
              prodName: "",
              description: "",
              criticalQty: 0,
              caseSize: 0,
              addedQty: 0
            },
            () => {
              let inputField = document.getElementById("prodName");
              inputField.focus();
            }
          );
        });
    } else {
      this.setState({
        alertShown: false,
        errorMessage: "",
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
      () => {
        let inputField = document.getElementById("upc2");
        inputField.focus();
      }
    );
  };
  toggleScanCheck = evt => {
    this.setState({ noScan: evt.target.checked });
  };
  render() {
    return (
      <>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <PageHeader title="Add Item" />
        <div className="row mainWrapper stretched">
          <div className="col s12 red darken-4 addItem centralContent">
            <h1
              className={this.state.showForm ? "scanText  hide" : "scanText"}
              onClick={this.manualEntry}
            >
              START SCANNING
              <br className="scanBreak" />
              TO ADD NEW ITEM
            </h1>
            <div className={this.state.showForm ? "" : "hide"}>
              <AddItem2
                upc={this.state.upc}
                typingEvent={this.inputTyping}
                saveClick={this.addItem}
                cancelEntry={this.cancelEntry}
                noScan={this.state.noScan}
                onChange={this.toggleScanCheck}
                prodName = {this.state.prodName}
                description = {this.state.description}
                criticalQty = {this.state.criticalQty}
                caseSize= {this.state.caseSize}
                addedQty= {this.state.addedQty}
              />
            </div>
          </div>
          <div id="modal1" className={this.modalViews()}>
            <div className="modal-content">
              <p>{this.state.errorMessage}</p>
              <div className={this.state.showUpcField ? "show" : "hide"}>
                <p className="black-text">Enter UPC:</p>
                <Input
                  textChangeFunc={this.inputTyping}
                  value={this.state.upc}
                  id="upc2"
                  name="upc"
                  textalign="center"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="modal-close waves-effect waves-grey btn-flat"
                onClick={this.hideModal}
              >
                OK
              </button>
              <button
                className={this.evalCancelVisibillity()}
                onClick={this.cancelModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}
