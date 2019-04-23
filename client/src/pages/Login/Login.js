import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
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
    API.checkPass(email, password)
      .then(serverResponse => {
        this.setState({
          email: "",
          password: ""
        });
        // handle response from server
        if (serverResponse === "badEmail") {
          // handle bad email
          console.log("serverResponse:\n", serverResponse);
          return;
        } else if (serverResponse === "badPass") {
          // handle bad password
          // password: '$2b$10$T/fAJdCJIxwLvhd07RvtS.pwlyMh9klhdXLqaBKFgu2AO6pW.rMMy'
          console.log("serverResponse:\n", serverResponse);
          return;
        }
        //window.location.href = "/Scan";
        console.log("serverResponse:\n", serverResponse);
      })
      .catch(error => {
        //window.location.href = "/Scan";
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
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input
            type="email"
            className="text-center"
            id="email"
            name="email"
            value={this.state.email}
            placeholder="email@domain.com"
            onChange={this.handleChange}
          />
          <Label htmlFor="password" className="">
            Password
          </Label>
          <Input
            type="password"
            className="text-center"
            id="password"
            name="password"
            value={this.state.password}
            placeholder="password"
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
