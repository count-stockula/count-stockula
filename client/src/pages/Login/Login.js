import React, { PureComponent } from "react";
//import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
//import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import BlackButton from "../../components/Button/Blackbutton";
import "./Login.css";

export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
    fetch("/api/login/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          // successful login
          // redirect to secure site
          this.props.history.push("/scan");
          //this.props.history.push("/testauth");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        //console.error(err);
        alert("Error logging in please try again");
      });
  };

  render() {
    return (
      <>
        <div className="logoContainer">
          <img src="images/logo.png" alt="Count Stockula Logo" width="150px" />
        </div>
        <div className="row">
          <div className="col s1 m3 l4" />
          <div className="col s10 m6 l4">
            <Form className="col" id="login">
              <div class="col s12">
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
              <div class="col s12">
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
            <BlackButton onClick={this.handleSubmit} text="Login" />
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
