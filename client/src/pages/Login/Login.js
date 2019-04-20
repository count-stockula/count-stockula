import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";

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
            defaultValue={this.state.email}
            placeholder="email@domain.com"
            onchange={this.handleChange}
          />
          <Label htmlFor="userPass" className="">
            Password
          </Label>
          <Input
            type="password"
            className="text-center"
            id="userPass"
            name="userPass"
            defaultValue={this.state.userPass}
            placeholder="password"
            onchange={this.handleChange}
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
