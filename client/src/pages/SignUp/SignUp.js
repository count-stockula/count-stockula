import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import "./SignUp.css";

export default class SignUp extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      theStores: [],
      storeId: "",
      phone: "",
      email: "",
      password: "",
      confirmation: "",
      alertShown: false,
      errorMessage: "",
      buttonText: "",
      management: false,
      disabledInputArray: ["management"]
    };
  }

  componentDidMount = () => {
    API.getSignUpStores().then(results => {
      this.setState({
        theStores: results.data,
        storeId: results.data[0]._id
      });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  modalViews = () => {
    return this.state.alertShown ? "modal modalOpen modalDismissable" : "modal";
  };

  hideModal = () => {
    this.setState({
      alertShown: false,
      errorMessage: "",
      showCancel: false
    });
  };

  showValidationAlert = message => {
    this.setState({
      alertShown: true,
      errorMessage: message,
      buttonText: "OK"
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      storeId,
      phone,
      email,
      password,
      confirmation,
      management
    } = this.state;

    // validation

    // name
    if (name === "") {
      this.showValidationAlert("please enter valid name");
      return;
    }
    // phone regex
    if (phone.length !== 10 || /[^0-9]/.test(phone)) {
      this.showValidationAlert(
        "phone must be 10 valid numerical digits with no spaces or special characters"
      );
      return;
    }
    // storeId
    if (storeId.length === 0) {
      console.log(`storeId: ${storeId}`);
      this.showValidationAlert("please select a valid store");
      return;
    }
    // email
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(String(email).toLowerCase())) {
      this.showValidationAlert(
        "please enter valid email in the form of email@domain.com"
      );
      return;
    }

    // password
    if (password !== confirmation || password.length < 8) {
      this.showValidationAlert(
        "password must be at least 8 characters and match the confirmed password"
      );
      return;
    }

    API.createUser({
      email: email,
      password: password,
      name: name,
      phone: phone,
      storeId: storeId,
      management: management
    })
      .then(serverResponse => {
        // handle response from server
        if (serverResponse === "email username already exists") {
          // handle bad email
          return;
        }
        this.setState({
          name: "",
          phone: "",
          storeId: "",
          email: "",
          password: "",
          confirmation: ""
        });
        this.showValidationAlert(
          "Successful SignUp\n\nPlease go to the login page to login with your new username and password"
        );
        //this.props.history.push("/");
      })
      .catch(error => {
        this.showValidationAlert(
          "Signup error\n\nPlease try again"
        );
      });
    // end API.checkPass
  };

  toggleBoolean = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: !value
    });
  };

  toggleDisable = event => {
    const { name, disabledInputArray } = event.target;
    const index = disabledInputArray.indexOf(name);
    if (index >= 0) {
      disabledInputArray.splice(index);
    } else {
      disabledInputArray.push(index);
    }
  };

  render() {
    return (
      <>
        <div className="logoContainer">
          <img src="/images/logo.png" alt="Count Stockula Logo" width="150px" />
        </div>
        <div className="row">
          <Modal
            buttonText={this.state.buttonText}
            className={this.modalViews()}
            onClick={this.hideModal.bind(this)} // "this" would default to click event but now "this" refers to SignUp.js
          >
            <p className="black-text">{this.state.errorMessage}</p>
          </Modal>
          <div className="col s1 m3 l3" />
          <div className="col s10 m6 l6">
            <Form className="col" id="login">
              <div className="col s12 l6">
                <Input
                  icon="fas fa-user icon"
                  type="text"
                  className="validate"
                  id="name"
                  name="name"
                  value={this.state.name}
                  placeholder="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col s12 l6">
                <div className="input-container">
                  <select
                    onChange={this.handleChange}
                    name="storeId"
                    id="store"
                    value={this.state.storeId}
                  >
                    {this.state.theStores.map(item => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col s12 l6">
                <Input
                  type="tel"
                  icon="fas fa-phone icon"
                  className="validate"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  placeholder="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col s12 l6">
                <Input
                  icon="fas fa-envelope icon"
                  type="email"
                  className="validate"
                  id="email"
                  name="email"
                  value={this.state.email}
                  placeholder="email@domain.com"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col s12">
                <Input
                  icon="fas fa-key icon"
                  type="password"
                  className="validate"
                  id="password"
                  name="password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className=" col s12">
                <Input
                  icon="fas fa-key icon"
                  type="password"
                  className="validate"
                  id="confirmation"
                  name="confirmation"
                  value={this.state.confirmation}
                  placeholder="confirm password"
                  onChange={this.handleChange}
                />
              </div>
              {/* <Input
              type="text"
              className="validate"
              id="management"
              name="management"
              value={this.state.management}
              //placeholder="name"
              onClick={this.toggleBoolean}
              disabled={this.state.disabledInputArray.includes("management")}
            /> */}
            </Form>
          </div>
        </div>
        <div className="signUpButton">
          <Button
            className="waves-effect waves-light btn black white-text"
            onClick={this.handleSubmit}
            text="Sign Up"
          >
            Sign Up
          </Button>
        </div>
        <div className="orSignUp">
          <a href="/">
            <Button>Returning User? Login</Button>
          </a>
        </div>
      </>
    );
  }
}
