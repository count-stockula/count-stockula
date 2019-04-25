import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default class SignUp extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "email@domain.com",
      password: "Password123",
      confirmation: "Password123",
      storeId: "5cbebab8dc5d0f0dfc134be2",
      name: "",
      disabledInputArray: []
    };
  }

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
    event.preventDefault();
    const { email, password, confirmation, storeId, name } = this.state;
    if (password !== confirmation) {
      alert("password must match confirmation");
      return;
    }
    API.createUser({
      email: email,
      password: password,
      storeId: storeId,
      name: name
    })
      .then(serverResponse => {
        this.setState({
          email: "",
          password: "",
          confirmation: "",
          storeId: "",
          name: ""
        });
        // handle response from server
        if (serverResponse === "badEmail") {
          // handle bad email
          return;
        } else if (serverResponse === "badPass") {
          // handle bad password
          return;
        }
        //window.location.href = "/Scan";
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
          <Input
            type="password"
            className="validate"
            id="confirmation"
            name="confirmation"
            value={this.state.confirmation}
            //placeholder="confirm password"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            className="validate"
            id="storeId"
            name="storeId"
            value={this.state.storeId}
            //placeholder="storeId"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            className="validate"
            id="name"
            name="name"
            value={this.state.name}
            //placeholder="name"
            onChange={this.handleChange}
            disabled={this.state.disabledInputArray.includes("name")}
          />
          <div>{this.state.message}</div>
          <Button onClick={this.handleSubmit}>SignUp</Button>
          <a href="/">
            <Button>Login</Button>
          </a>
        </Form>
      </>
    );
  }
}
