import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
//import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import Blackbutton from "../../components/Button/Blackbutton";
import "./Login.css";


export default class Login extends PureComponent {
  state = {
    email: "",
    userPass: ""
  };

  handleChange = event => {
    const { name, defaultValue } = event.target;
    this.setState({
      [name]: defaultValue
    });
  };

  handleSubmit = event => {
    const { email, userPass } = this.state;
    event.preventDefault();
    API.checkPass(email, userPass)
      .then(serverResponse => {
        this.setState({
          email: "",
          userPass: ""
        });
        // handle response from server
        if (serverResponse === "badEmail") {
          // handle bad email
          return;
        } else if (serverResponse === "badPass") {
          // handle bad password
          return;
        }
        window.location.href = "/Scan";
      })
      .catch(error => {
        window.location.href = "/Scan";
      });
    // end API.checkPass
  };

  render() {
    return (
      <>
      <div className="logoContainer">
        <img
          src="images/logo.png"
          alt="Count Stockula Logo"
          width="150px"
        />
        </div>
        <div className="mx-auto col-10 col-lg-4 col-md-6 col-sm-6 col-xl-4 px-0">
          <div className="loginContainer">
            <Form className="col" id="login">
              {/* <h1 className="login-label">Email:</h1> */}
              <Input
                type="email"
                className="text-center"
                id="email"
                name="email"
                defaultValue={this.state.email}
                placeholder="email@domain.com"
                onchange={this.handleChange}
              />
              {/* <h1 className="login-label">Password:</h1> */}
              <Input
                type="password"
                className="text-center"
                id="userPass"
                name="userPass"
                defaultValue={this.state.userPass}
                placeholder="password"
                onchange={this.handleChange}
              />
              <Blackbutton onClick={this.handleSubmit} text="login"></Blackbutton>
            </Form>
          </div>
          <div className="orSignUp">
            <a href="/SignUp">
              <Button>New User? SIGN UP</Button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
