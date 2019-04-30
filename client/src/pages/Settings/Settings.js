import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import SettingsForm from "../../components/Forms/SettingsForm"
import Modal from "../../components/Modal/Modal";

export default class Settings extends PureComponent {
  state = {
      storeId: "",
      theStores: [],
      userName: "asylvestercat",
      email: "annasylvester@bellsouth.net",
      phoneNo: "4047758598",
      alertShown: false,
      errorMessage:"",
      buttonText:"OK"
   };

  saveClick = event => {
    event.preventDefault();
    // This will become get cookie function
    let userId = "5cb67993ed72c8002a0bd15d"
    const userData = {
      name: this.state.userName,
      storeId: this.state.storeId,
      email: this.state.email,
      phone: this.state.phoneNo
    }
  
    API.updateUser(userId, userData)
    .then((results) => {
      this.setState({
        alertShown: true,
        errorMessage: `User settings saved`,
      });
    })
    .catch((error) => {
      this.setState({
        alertShown: true,
        errorMessage: `Error occured while updating user settings to the db, ${error}`,
      });
    })

  }
  modalViews = () => {
    return this.state.alertShown ? "modal modalOpen" : "modal";
  };
  hideModal = () => {     
          this.setState({          
          alertShown:false ,
          errorMessage:"",   
          buttonText:"OK",         
          });
     }
     evalCancelVisibillity = () => {
      return "hide";
  }
  
  cancelModal = () => {
    this.setState({alertShown: false, errorMessage:"", upc:""});
  }
  onChange = event => {
    const { name, value } = event.target;  
    this.setState({
      [name]: value
    });         
  }

  selectStore = event => {
    const { name, value } = event.target;   
    this.setState({
      [name]: value
    });    

  }

  componentDidMount = () => {
    API.getAllStores().then(res => {
      this.setState({theStores: res.data})
    })
  }

  render() {
    return (
      <>
        <PageHeader title="Settings" />
        <div className="row mainWrapper stretched">
          <div className="col red darken-4 inv centralContent">
            <SettingsForm 
            selectStore={this.selectStore}
            typingEvent = {this.onChange}
            saveClick={this.saveClick}
            theStores={this.state.theStores}
            userName={this.state.userName} 
            email={this.state.email}
            phoneNo={this.state.phoneNo}
            />
          </div>
          <Modal cancelModal={this.cancelModal}  buttonText={this.state.buttonText} className={this.modalViews()} onClick={this.hideModal.bind(this)}>
                    <p className="black-text">{this.state.errorMessage}</p>                   
            </Modal>
        </div>
        <BottomBar />
      </>
    );
  }
}
