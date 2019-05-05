import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import SettingsForm2 from "../../components/Forms/SettingsForm2";
import Modal from "../../components/Modal/Modal";
import "./Settings.css";

export default class Settings extends PureComponent {
  state = {
    storeId: "",
    theStores: [],
    userName: "",
    userId: "",
    email: "",
    phoneNo: "",
    alertShown: false,
    errorMessage: "",
    buttonText: "OK"
  };

  componentWillMount = () => {
    API.authenticate()
      .then(results => this.setState({}))
      .catch(error => this.props.history.push("/"));
  };
  
  saveClick = event => {
    event.preventDefault();
    let userId = this.state.userId;
    const userData = {
      name: this.state.userName,
      storeId: this.state.storeId,
      email: this.state.email,
      phone: this.state.phoneNo
    };

    API.updateUser(userId, userData)
      .then(results => {
        this.setState({
          alertShown: true,
          errorMessage: `User settings saved`
        });
      })
      .catch(error => {
        this.setState({
          alertShown: true,
          errorMessage: `Error occured while updating user settings to the db, ${error}`
        });
      });
    // handle with componentWillMount API.authenticate()
    //.catch(error => this.props.history.push("/"));
  };
  modalViews = () => {
    return this.state.alertShown ? "modal modalOpen" : "modal";
  };
  hideModal = () => {
    this.setState({
      alertShown: false,
      errorMessage: "",
      buttonText: "OK"
    });
  };
  evalCancelVisibillity = () => {
    return "hide";
  };

  cancelModal = () => {
    this.setState({
      alertShown: false,
      errorMessage: "",
      upc: ""
    });
  };
  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  selectStore = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    API.getAllStores().then(
      storeRes => {
        this.setState({
          theStores: storeRes.data
        });
      },API.currentUser().then(userRes => 
        this.setState({
          userId: userRes.data._id,
          storeId: userRes.data.storeId,
          userName: userRes.data.name,
          email: userRes.data.email,
          phoneNo: userRes.data.phone
        })
      ));
  };

  render() {
    return (
      <>
        <PageHeader title="Settings" />
        <div className="row mainWrapper stretched">
          <div className="col red darken-4 inv centralContent settingsContainer">
            <SettingsForm2
              selectStore={this.selectStore}
              storeId={this.state.storeId}
              typingEvent={this.onChange}
              saveClick={this.saveClick}
              theStores={this.state.theStores}
              userName={this.state.userName}
              email={this.state.email}
              phoneNo={this.state.phoneNo}
            />
          </div>
          <Modal
            cancelModal={this.cancelModal}
            buttonText={this.state.buttonText}
            className={this.modalViews()}
            onClick={this.hideModal.bind(this)}
          >
            <p className="black-text">{this.state.errorMessage}</p>
          </Modal>
        </div>
        <BottomBar />
      </>
    );
  }
}
