import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";

export default class SignUp extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "email@domain.com",
      password: "Password123",
      confirmation: "Password123",
      storeId: "5cbebab8dc5d0f0dfc134be2",
      test: "",
      disabledInputArray: ["test"]
    };
  }

  isDisabled = event => {
    const { name, disabledInputArray } = event.target;
    return disabledInputArray.includes(name);
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { email, password, confirmation, storeId, test } = this.state;
    event.preventDefault();
    API.createUser({
      "email": email,
      "password": password,
      "storeId": storeId
    })
      .then(serverResponse => {
        this.setState({
          email: "",
          password: "",
          confirmation: "",
          storeId: "",
          test: ""
        });
        // handle response from server
        if (serverResponse === "badEmail") {
          // handle bad email
          console.log("serverResponse:\n", serverResponse);
          return;
        } else if (serverResponse === "badPass") {
          // handle bad password
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
          <Label htmlFor="confirmation" className="">
            Confirm Password
          </Label>
          <Input
            type="password"
            className="form-control text-center"
            id="confirmation"
            name="confirmation"
            value={this.state.confirmation}
            placeholder="confirm password"
            onChange={this.handleChange}
          />
          <Label htmlFor="storeId" className="">
            storeId
          </Label>
          <Input
            type="text"
            className="form-control text-center"
            id="storeId"
            name="storeId"
            value={this.state.storeId}
            placeholder="storeId"
            onChange={this.handleChange}
          />
          <Label htmlFor="test" className="">
            test
          </Label>
          <Input
            type="text"
            className="form-control text-center"
            id="test"
            name="test"
            value={this.state.test}
            placeholder="test"
            onChange={this.handleChange}
            disabled={this.isDisabled ? true : false}
          />
          <Button onClick={this.handleSubmit}>SignUp</Button>
          <a href="/">
            <Button>Login</Button>
          </a>
        </Form>
      </>
    );
  }
}
