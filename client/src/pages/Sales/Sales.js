import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import List from "../../components/List/List";
import BarcodeReader from "react-barcode-reader";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import ListItem from "../../components/ListItem/ListItem";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/SimpleInput";
import SideNav from "../../components/SideNav/SideNav";
import "./Sales.css";

export default class Sales extends PureComponent {
  state = {
    store: {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    },
    purchasedItems: [],
    alertShown: false,
    errorMessage: "",
    buttonText: "OK",
    showEmailDialog: false,
    showUPCDialog: false,
    userEmail: "",
    upc: "",
    nonScanItems: []
  };
  
  componentWillMount = () => {
    API.authenticate()
      .then(results => this.setState({}))
      .catch(error => this.props.history.push("/"));    
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.keyPressListener, false);
    API.getNoScanItems()
      .then(results => {
        this.setState({
          nonScanItems: results.data
        });
      })
      .catch(err => {
        this.setState({
          alertShown: true,
          showEmailDialog: false,
          errorMessage: "Error loading non scan items " + err,
          buttonText: "OK",
          showUPCDialog: false
        });
      });
      API.currentUser()
    .then(result => {
      this.setState({store: result.data.storeId});
    })
  };
  openSide = () => {
    var elems = document.getElementById("sidenav");
    elems.className = "sidenav opened";
  };
  closeSide = event => {
    if (event.target.textContent !== "close") {
      this.handleScan(event.target.id);
    }
    var elems = document.getElementById("sidenav");
    elems.className = "sidenav";
  };
  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.keyPressListener, false);
  };
  getEmail = () => {    
    if (this.state.purchasedItems.length < 1) {
      this.setState({
        alertShown: true,
        showEmailDialog: false,        
        userEmail: "",
        errorMessage: "Empty order, please scan items",
        buttonText: "OK",
        showUPCDialog: false
      });
      return;
    }
    this.setState({
      errorMessage: "",
      alertShown: true,
      userEmail: "",
      showEmailDialog: true,
      buttonText: "Send Email",
      showUPCDialog: false
    },this.componentDidUpdate = () =>{document.getElementById("userEmail").focus();});
  };
  createPdf = () => {
    this.thisObj.blur();
    const { vfs } = pdfFonts.pdfMake;
    pdfMake.vfs = vfs;
    const storeName = this.state.store.name;
    const address = this.state.store.address;
    const formatedPhone = `(${this.state.store.phone.substring(0,3)}) ${this.state.store.phone.substring(3,6)}-${this.state.store.phone.substring(6,10)}`;
    const city =
      this.state.store.city +
      ", " +
      this.state.store.state ;
    let currPurchase = this.state.purchasedItems;
    const documentDefinition = {
      pageSize: { width: 250, height: "auto" },
      pageOrientation: "portrait",
      content: [
        {
          image:
            "data:image/jpeg;base64,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dGluZ2Jvb2wAAAAADmNyb3BSZWN0Qm90dG9tbG9uZwAAAAAAAAAMY3JvcFJlY3RMZWZ0bG9uZwAAAAAAAAANY3JvcFJlY3RSaWdodGxvbmcAAAAAAAAAC2Nyb3BSZWN0VG9wbG9uZwAAAAAAOEJJTQPtAAAAAAAQAEgAAAABAAEASAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAWjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAThCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAAAAAAAAAIAAThCSU0EAgAAAAAABAAAAAA4QklNBDAAAAAAAAIBAThCSU0ELQAAAAAABgABAAAAAjhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANJAAAABgAAAAAAAAAAAAAAWAAAANYAAAAKAFUAbgB0AGkAdABsAGUAZAAtADEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAANYAAABYAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAABYAAAAAFJnaHRsb25nAAAA1gAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xp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cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA1LTA2VDIwOjAyOjU0LTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA1LTA2VDIwOjAyOjU0LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNS0wNlQyMDowMjo1NC0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NTc3MGIzNS1kMTg1LTAxNDQtYWQ3My04ZTljNGJhODdmZWIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkOGI2YTQ1MS03ODNiLWNjNGQtYWU4My1kMTA1ZmRiY2VmYzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZmFiNzYxMi02MWQzLWE4NGQtOGE5MS1mOTQ5OGVlZjlkYjciIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGZhYjc2MTItNjFkMy1hODRkLThhOTEtZjk0OThlZWY5ZGI3IiBzdEV2dDp3aGVuPSIyMDE5LTA1LTA2VDIwOjAyOjU0LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1NzcwYjM1LWQxODUtMDE0NC1hZDczLThlOWM0YmE4N2ZlYiIgc3RFdnQ6d2hlbj0iMjAxOS0wNS0wNlQyMDowMjo1NC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4AIUFkb2JlAGRAAAAAAQMAEAMCAwYAAAAAAAAAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAQEBAQICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//CABEIAFgA1gMBEQACEQEDEQH/xACkAAEAAgIDAQEBAQAAAAAAAAAABwgGCQIFCgQDAQsBAQAAAAAAAAAAAAAAAAAAAAAQAAICAgIBAwQBBQAAAAAAAAcIBgkEBQIDABABCiBQgBFAFBgZKTkRAAEFAQABAwIEAwQHCQEAAAQBAgMFBgcIERITACExFBUJECIWIEFhI1DwUTJCFxhAcYGRwdEkRlYoEgEAAAAAAAAAAAAAAAAAAACA/9oADAMBAQIRAxEAAAD38AAAAAAAAAAAAAAAAAAAAAAAAAAAA4kAnnxKilkDe+XROtPhMoAAAAAAAABhB4wiCyVzuDtjfYXLK0mPnIxsuWRgdqYWdiRESQYyWVIM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",
          width: 175
        },
        { text: storeName, alignment: "center" },
        { text: address, alignment: "center" },
        { text: city, alignment: "center" },
        {
          text: formatedPhone,
          alignment: "center",
          margin: [0, 0, 0, 30]
        },
        [
          currPurchase.map(item => {
            return item.name;
          })
        ],
        {
          text:
            new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit"
            }),
          alignment: "left",
          margin: [0, 30, 0, 30]
        },
        {
          text:
            "Powered by Count Stockula"
            ,
          alignment: "left",
          margin: [12, 30, 0, 30]
        }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 18,
          marginBottom: 24
        }
      }
    };
    let userEmail = this.state.userEmail;
    pdfMake.createPdf(documentDefinition).getBase64(function(encodedString) {
      let data = encodedString;
      try {
        API.sendEmail(userEmail, data);
      } catch (err) {
        this.setState({
          alertShown: true,
          errorMessage: `Error occured while attempting to create the pdf, ${err}`,
          showEmailDialog: false,
          showUPCDialog: false
        });
      }
    });
    this.setState({
      purchasedItems: [],
      alertShown: false,
      buttonText: "OK"
    });
    pdfMake.createPdf(documentDefinition).open();
    
  };
  dateFormat = () => {
    let val =
      new Date().toLocaleDateString() +
      " " +
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
    return "Sales: " + val;
  };
  handleScan = data => {
    //data will be the upc
    API.reduceStock("5cb3247aef86d68b5e0dc795", data.trim(), 1)
      .then(retData => {
        this.setState({
          purchasedItems: [...this.state.purchasedItems, retData.data],
          showEmailDialog: false,
          alertShown: false
        });
      })
      .catch(err => {
        this.setState({
          errorMessage:
            "Failed to find scanned item with UPC number " +
            data +
            " in the database",
          showEmailDialog: false,
          alertShown: true
        });
      });
  };
  modalViews = () => {
    let cssStr = "modal";
    cssStr += this.state.alertShown ? " modalOpen" : "";
    cssStr += this.state.showEmailDialog ? " black" : "";
    return cssStr;
  };
  hideModal = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      this.state.showEmailDialog &&
      re.test(String(this.state.userEmail).toLowerCase())
    ) {
      let orderBody = {
        storeId:"5cb3247aef86d68b5e0dc795",
        customerEmail: this.state.userEmail,
        purchaseDate: new Date(),
        employeeId: "5cc4758fbf3bef4644a72bc4",
        items: this.state.purchasedItems.map(item => item._id)
      }
      API.saveOrder(orderBody).then(result => {
        this.createPdf();
      }).catch(err => {
        this.setState({
          showEmailDialog: true,
          alertShown: true,
          errorMessage: err
        });
        return;
      });
    } else if (this.state.showUPCDialog && this.state.upc !== "") {
      this.handleScan(this.state.upc);
    } else if (this.state.showEmailDialog && this.state.userEmail === "") {
      this.setState({
        showEmailDialog: true,
        alertShown: true,
        errorMessage: "Email Address not provided"
      });
      return;
    }
    this.setState({
      showEmailDialog: false,
      alertShown: false,
      errorMessage: ""
    });
  };
  changeEvent = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  evalCancelVisibillity = () => {
    return "hide";
  };
  enterUPC = () => {
    this.setState({
      alertShown: true,
      showEmailDialog: false,
      showUPCDialog: true,
      upc: ""
    },this.componentDidUpdate = () =>{document.getElementById("upc").focus();});
  };
  render() {
    return (
      <>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <PageHeader title={this.dateFormat()} isRed="true" />
        <SideNav closeWin={this.closeSide} theItems={this.state.nonScanItems} />
        <i className="material-icons openIcon" onClick={() => this.openSide()}>
          chevron_right
        </i>
        <div className="row mainWrapper stretched">
          <div className="sales centralContent">
            <List className="ListOfGroceries">
              {this.state.purchasedItems.map((item, i) => {
                return <ListItem key={i}>{item.name}</ListItem>;
              })}
            </List>
            <div className="btnHolder">
              <button
                className="btn red darken-4"
                onClick={() => this.getEmail()}
                ref={thisObj => {
                  this.thisObj = thisObj;
                }}
              >
                Finish Sale
              </button>
              <button
                className="btn red darken-4"
                ref={manBtn => {
                  this.manBtn = manBtn;
                }}
                onClick={() => this.enterUPC()}
              >
                Manual Entry
              </button>
            </div>
          </div>

          <Modal
            evalCancelVisibillity={this.evalCancelVisibillity}
            showEmailDialog={this.state.showEmailDialog}
            buttonText={this.state.buttonText}
            className={this.modalViews()}
            onClick={this.hideModal}
          >
            <p>{this.state.errorMessage}</p>
            <div className={this.state.showEmailDialog ? "show" : "hide"}>
              <p>Provide email address:</p>
              <Input
                textChangeFunc={this.changeEvent}
                id="userEmail"
                name="userEmail"
                textalign="center"
                value={this.state.userEmail}
                required                
              />
            </div>
            <div className={this.state.showUPCDialog ? "show" : "hide"}>
              <p>Enter in UPC:</p>
              <Input
                textChangeFunc={this.changeEvent}
                id="upc"
                name="upc"
                textalign="center"
                value={this.state.upc}
                required
              />
            </div>
          </Modal>
        </div>
        <BottomBar />
      </>
    );
  }
}
