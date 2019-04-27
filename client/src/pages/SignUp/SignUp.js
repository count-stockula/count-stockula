import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import Blackbutton from "../../components/Button/Blackbutton";
import "./SignUp.css";

export default class SignUp extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "email@domain.com",
      password: "Password123",
      confirmation: "Password123",
      name: "",
      phone: "",
      storeId: "5cc23c1209d77f5e2b71390c",
      management: false,
      disabledInputArray: ["management"]
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
    const { email, password, confirmation, name, phone, storeId, management } = this.state;
    if (password !== confirmation) {
      alert("password must match confirmation");
      return;
    }
    API.createUser({
      email: email,
      password: password,
      name: name,
      phone: phone,
      storeId: storeId,
      management: management
    })
      .then(serverResponse => {
        // handle response from server
        if (serverResponse === "email username already exists") {
          // handle bad email
          return;
        }
        this.setState({
          email: "",
          password: "",
          confirmation: "",
          name: "",
          phone: "",
          storeId: "",
        });
        alert("Successful SignUp\n\nPlease login with your new username and password");
        window.location.href = "/";
      })
      .catch(error => {
        //window.location.href = "/Scan";
      });
    // end API.checkPass
  };

  toggleBoolean = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: !value
    })
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

  render() {
    return (
      <>
        <div className="logoContainer">
          <img
            src="/images/logo.png"
            alt="Count Stockula Logo"
            width="150px"
          />
        </div>
        <div className="col red darken-4 inv centralContent">
          <Form id="signup">
            <div className="col s12 m12">
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
            <div className="col s12 m12">
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
            <div className="col s12 m12">
            <Label htmlFor="Re-type Password" className="" />
              <Input
                type="password"
                className="validate"
                id="confirmation"
                name="confirmation"
                value={this.state.confirmation}
                //placeholder="confirm password"
                onChange={this.handleChange}
              />
            </div>
            <div className="col s12 m12">
            <Label htmlFor="Name" className="" />
              <Input
                type="text"
                className="validate"
                id="name"
                name="name"
                value={this.state.name}
                //placeholder="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="col s12 m12">
            <Label htmlFor="Phone No." className="" />
              <Input
                type="tel"
                className="validate"
                id="phone"
                name="phone"
                value={this.state.phone}
                //placeholder="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="col s12 m12">
            <Label htmlFor="StoreID" className="" />
              <Input
                type="text"
                className="validate"
                id="storeId"
                name="storeId"
                value={this.state.storeId}
                //placeholder="storeId"
                onChange={this.handleChange}
              />
            </div>
            <div className="col s12 m12">
            <Label htmlFor="Management?" className="" />
              <Input
                type="text"
                className="validate"
                id="management"
                name="management"
                value={this.state.management}
                //placeholder="name"
                onClick={this.toggleBoolean}
                disabled={this.state.disabledInputArray.includes(
                  "management"
                )}
              />
            </div>
          </Form>
        </div>
        <Button onClick={this.handleSubmit}>SignUp</Button>
        <div className="orSignUp">
          <a href="/">
            <Button>Returning User? Login</Button>
          </a>
        </div>
      </>
    );
  }
}
