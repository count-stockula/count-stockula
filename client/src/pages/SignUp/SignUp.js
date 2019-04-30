import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./SignUp.css";

export default class SignUp extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmation: "",
      name: "",
      phone: "",
      storeId: "",
      theStores: [],
      management: false,
      disabledInputArray: ["management"]
    };
  }

  componentDidMount = () => {
    API.getAllStores().then(results => {
      this.setState({ theStores: results.data });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target.value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      email,
      password,
      confirmation,
      name,
      phone,
      storeId,
      management
    } = this.state;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(String(email).toLowerCase())) {
      alert("please enter valid email");
      return;
    }
    if (password !== confirmation) {
      alert("password must match confirmation");
      return;
    }
    // if (name !== "") {
    //   alert("please enter valid email");
    //   return;
    // }
    // if (phone !== "") {
    //   alert("please enter valid email");
    //   return;
    // }

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
          storeId: ""
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
        <div className="mx-auto col-10 col-lg-4 col-md-6 col-sm-6 col-xl-4 px-0">
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
            <Label htmlFor="confirmation" className="" />
            <Input
              type="password"
              className="validate"
              id="confirmation"
              name="confirmation"
              value={this.state.confirmation}
              //placeholder="confirm password"
              onChange={this.handleChange}
            />
            <Label htmlFor="name" className="" />
            <Input
              type="text"
              className="validate"
              id="name"
              name="name"
              value={this.state.name}
              //placeholder="name"
              onChange={this.handleChange}
            />
            <Label htmlFor="phone" className="" />
            <Input
              type="tel"
              className="validate"
              id="phone"
              name="phone"
              value={this.state.phone}
              //placeholder="name"
              onChange={this.handleChange}
            />
            {/* <Input
              type="text"
              className="validate"
              id="storeId"
              name="storeId"
              value={this.state.storeId}
              //placeholder="storeId"
              onChange={this.handleChange}
            /> */}
            <Label htmlFor="store" className="" />
            <select onChange={this.handleChange} name="storeId" id="store">
              {/* <option defaultValue="0" value="0">
                Select a store...
              </option> */}
              {this.state.theStores.map(item => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
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