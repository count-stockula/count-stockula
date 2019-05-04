import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
//import BlackButton from "../../components/Button/Blackbutton";
import "./SignUp.css";

export default class SignUp extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "jarret",
      storeId: "",
      phone: "123-456-7890",
      email: "name@test.com",
      password: "Password1234",
      confirmation: "Password1234",
      theStores: [],
      management: false,
      disabledInputArray: ["management"]
    };
  }

  componentDidMount = () => {
    API.getSignUpStores().then(results => {
      this.setState({ theStores: results.data, storeId: results.data[0]._id });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      storeId,
      phone,
      email,
      password,
      confirmation,
      management
    } = this.state;

    // validation
    // name
    if (name === "") {
      alert("please enter valid name");
      return;
    }
    // phone
    if (phone === "") {
      alert("please enter valid phone");
      return;
    }
    if (storeId.length === 0) {
      console.log(`storeId: ${storeId}`);
      alert("please select a valid store");
      return;
    }
    // email
    //const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(String(email).toLowerCase())) {
      alert("please enter valid email");
      return;
    }
    // password
    if (password !== confirmation) {
      alert("password must match confirmed password");
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
          name: "",
          phone: "",
          storeId: "",
          email: "",
          password: "",
          confirmation: ""
        });
        alert(
          "Successful SignUp\n\nPlease login with your new username and password"
        );
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
    });
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
          <img src="/images/logo.png" alt="Count Stockula Logo" width="150px" />
        </div>
        <div className="row">
          <div className="col s1 m3 l3" />
          <div className="col s10 m6 l6">
            <Form className="col" id="login">
              <div className="col s12 l6">
                {/* <Label htmlFor="name" className="" /> */}
                <Input
                  icon="fas fa-user icon"
                  type="text"
                  className="validate"
                  id="name"
                  name="name"
                  value={this.state.name}
                  placeholder="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col s12 l6">
                <div className="input-container">
                  <select
                    onChange={this.handleChange}
                    name="storeId"
                    id="store"
                    value={this.state.storeId}
                  >
                    {this.state.theStores.map(item => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col s12 l6">
                <Input
                  type="tel"
                  icon="fas fa-phone icon"
                  className="validate"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  placeholder="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col s12 l6">
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
              <div className="col s12">
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
              <div className=" col s12">
                <Input
                  icon="fas fa-key icon"
                  type="password"
                  className="validate"
                  id="confirmation"
                  name="confirmation"
                  value={this.state.confirmation}
                  placeholder="confirm password"
                  onChange={this.handleChange}
                />
              </div>
              {/* <Input
              type="text"
              className="validate"
              id="storeId"
              name="storeId"
              value={this.state.storeId}
              //placeholder="storeId"
              onChange={this.handleChange}
            /> */}
              {/* <Input
              type="text"
              className="validate"
              id="management"
              name="management"
              value={this.state.management}
              //placeholder="name"
              onClick={this.toggleBoolean}
              disabled={this.state.disabledInputArray.includes("management")}
            /> */}
            </Form>
          </div>
        </div>
        <div className="signUpButton">
          <Button
            className="waves-effect waves-light btn black white-text"
            onClick={this.handleSubmit}
            text="Sign Up"
          >
            Sign Up
          </Button>
        </div>
        <div className="orSignUp">
          <a href="/">
            <Button>Returning User? Login</Button>
          </a>
        </div>
      </>
    );
  }
}
