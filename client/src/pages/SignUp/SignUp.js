import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import Blackbutton from "../../components/Button/Blackbutton";

export default class SignUp extends PureComponent {
  state = {
    email: "",
    userPass: "",
    confPass: "",
    storeId: "",
    EXTRA: "",
    disabledInputArray: ["EXTRA"]
  };

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
    const { name, defaultValue } = event.target;
    this.setState({
      [name]: defaultValue
    });
  };

  handleSubmit = event => {
    const { email, userPass, confPass, storeId, EXTRA } = this.state;
    event.preventDefault();
    API.createUser(email, userPass, confPass, storeId, EXTRA)
      .then(serverResponse => {
        this.setState({
          email: "",
          userPass: "",
          confPass: "",
          storeId: "",
          EXTRA: ""
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
      <div className="logoContainer">
        <img
          src="/images/logo.png"
          alt="Count Stockula Logo"
          width="150px"
        />
        </div>
        <div className="mx-auto col-10 col-lg-4 col-md-6 col-sm-6 col-xl-4 px-0">
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
          <Label htmlFor="confPass" className="">
            Confirm Password
          </Label>
          <Input
            type="text"
            className="form-control text-center"
            id="confPass"
            name="confPass"
            defaultValue={this.state.confPass}
            placeholder="confirm password"
            onchange={this.handleChange}
          />
          <Label htmlFor="storeId" className="">
            storeId
          </Label>
          <Input
            type="text"
            className="form-control text-center"
            id="storeId"
            name="storeId"
            defaultValue={this.state.storeId}
            placeholder="storeId"
            onchange={this.handleChange}
          />
          <Label htmlFor="EXTRA" className="">
            EXTRA
          </Label>
          <Input
            type="text"
            className="form-control text-center"
            id="EXTRA"
            name="EXTRA"
            defaultValue={this.state.EXTRA}
            placeholder="EXTRA"
            onchange={this.handleChange}
            disabled={this.isDisabled ? true : false}
          />
          <Blackbutton onClick={this.handleSubmit} text="sign up"></Blackbutton>
        </Form>
        </div>
        <div className="orSignUp">
            <a href="/">
              <Button>Returning User? SIGN IN</Button>
            </a>
        </div>
      </>
    );
  }
}
