import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Label from "../../components/Label/Label";
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
          <img src="images/logo.png" alt="Count Stockula Logo" width="150px" />
        </div>
        <div className="col red darken-4 inv centralContent">
          <Form id="login">
            <div className="col s12 m6">
              <Label htmlFor="Email" className="" />
              <Input
                type="email"
                className="validate"
                id="email"
                name="email"
                value={this.state.email}
                //placeholder="email@domain.com"
                onChange={this.handleChange}
              />
            </div>
            <div className="col s12 m6">
            <Label htmlFor="Password" className="" />
              <Input
                type="password"
                className="validate"
                id="password"
                name="password"
                value={this.state.password}
                //placeholder="password"
                onChange={this.handleChange}
              />
            </div>
          </Form>
        </div>
        <Button onClick={this.handleSubmit}>Login</Button>
        <div className="orSignUp">
          <a href="/SignUp">
            <Button>New User? SIGN UP</Button>
          </a>
          <a href="/testauth">
            <Button>TestAuth</Button>
          </a>
        </div>
      </>
    );
  }
}
