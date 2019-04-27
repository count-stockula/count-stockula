import React, { PureComponent } from "react";
//import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css";

export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "email@domain.com",
      password: "Password123"
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/");
          // successful login
          //window.location.href = "/testauth";
          window.location.href = "/scan";
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
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
              <Label htmlFor="email" className="" />
              <Input
                type="email"
                className="validate"
                id="email"
                name="email"
                value={this.state.email}
                //placeholder="email@domain.com"
                onChange={this.handleChange}
              />
              <Label htmlFor="password" className="" />
              <Input
                type="password"
                className="validate"
                id="password"
                name="password"
                value={this.state.password}
                //placeholder="password"
                onChange={this.handleChange}
              />
            </Form>
          </div>
          <div className="mx-auto col-10 col-lg-4 col-md-6 col-sm-6 col-xl-4 px-0">
            <Button onClick={this.handleSubmit}>Login</Button>
          </div>
          <div className="orSignUp">
            <a href="/SignUp">
              <Button>New User? SIGN UP</Button>
            </a>
          </div>
          <div className="TestAuth">
            <a href="/testauth">
              <Button>TestAuth</Button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
