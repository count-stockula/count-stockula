import React, { PureComponent } from "react";
import Button from "../../components/Button/Button";
import "./TestAuth.css";

export default class TestAuth extends PureComponent {
  constructor() {
    super();
    this.state = {
      authRoute: "TestAuth"
    };
  }

  render() {
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
