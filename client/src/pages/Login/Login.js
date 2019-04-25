import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

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
    const { email, password } = this.state;
    event.preventDefault();
    API.loginUser(email, password)
      .then(serverResponse => {
        this.setState({
          password: ""
        });
        console.log("serverResponse:\n", serverResponse);
        // handle response from server
        if (
          serverResponse === "email username not found" ||
          serverResponse === "incorrect password"
        ) {
          // handle email username not found or incorrect password
          // password: '$2b$10$T/fAJdCJIxwLvhd07RvtS.pwlyMh9klhdXLqaBKFgu2AO6pW.rMMy'
          alert(serverResponse);
          return;
        }
        //successful login
        alert("successful login");
        //window.location.href = "/Scan";
      })
      .catch(error => {
        //window.location.href = "/404";
      });
    // end API.checkPass
  };

  render() {
    return (
      <>
        <img
          src="/images/cntStockLogo.png"
          alt="Count Stockula Logo"
          width="300px"
        />
        <Form className="col" id="login">
          <Input
            type="email"
            className="validate"
            id="email"
            name="email"
            value={this.state.email}
            //placeholder="email@domain.com"
            onChange={this.handleChange}
          />
          <Input
            type="password"
            className="validate"
            id="password"
            name="password"
            value={this.state.password}
            //placeholder="password"
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit}>Login</Button>
          <a href="/SignUp">
            <Button>Sign Up</Button>
          </a>
        </Form>
      </>
    );
  }
}
