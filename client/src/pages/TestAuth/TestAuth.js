import React, { PureComponent } from "react";
//import API from "../../components/utils/API";
import Button from "../../components/Button/Button";
import "./TestAuth.css";

export default class TestAuth extends PureComponent {
  constructor() {
    super();
    this.state = {
      authRoute: "TestAuth",
      isAuthenticated: true,
      redirectToReferrer: false,
      tokenCookie: true
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Success: you hit an authorized route {this.authRoute}!</h3>
        <a href="/">
          <Button>Back to Login</Button>
        </a>
      </div>
    );
  }
}
