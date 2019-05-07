import React, { PureComponent } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import "./Login.css";

export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      alertShown: false,
      errorMessage: ""
    };
  }

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
    fetch("/api/login/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          // successful login, redirect to secure site
          this.props.history.push("/scan");
          //this.props.history.push("/testauth");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        this.showValidationAlert("login error, please try again");
      });
  };

  render() {
    return (
      <>
        <div className="logoContainer">
          <img src="images/logo.png" alt="Count Stockula Logo" width="150px" />
        </div>
        <div className="row">
          <Modal
            buttonText={this.state.buttonText}
            className={this.modalViews()}
            onClick={this.hideModal.bind(this)} // "this" would default to click event but now "this" refers to SignUp.js
          >
            <p className="black-text">{this.state.errorMessage}</p>
          </Modal>
          <div className="col s1 m3 l4" />
          <div className="col s10 m6 l4">
            <Form className="col" id="login">
              <div className="col s12">
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
            </Form>
          </div>
        </div>
        <div className="col s1 m3 l4" />
        <div className="row">
          <div className="loginButton">
            <Button
              className="waves-effect waves-light btn black white-text"
              onClick={this.handleSubmit}
              text="Login"
            >
              Login
            </Button>
          </div>
          <div className="orSignUp">
            <a href="/SignUp">
              <Button>New User? SIGN UP</Button>
            </a>
          </div>
          {/* <div className="TestAuth">
            <a href="/testauth">
              <Button>TestAuth</Button>
            </a>
          </div> */}
        </div>
       
      </>
    );
  }
}
