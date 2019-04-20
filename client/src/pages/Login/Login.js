import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default class Login extends PureComponent {
  state = {
    email: "",
    userPass: ""
  };
  
  handleInput = (inputName) => {

  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    API.checkPass(this.state.email, this.state.userPass)
    .then(serverResponse => {
      this.setState({email: "", userPass: ""});
        // handle response from server
        if (serverResponse === "badEmail") {
          // handle bad email
          return;
        } else if (serverResponse === "badPass") {
          // handle bad password
          return;
        }
        window.location("/Scan");
    });
  };

  render() {
    return (
      <div className="container px-0 w-100 pb-5">
        <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0">
          <Form id="login">
            <Input type="email" className="text-center" id="email" ref="" name="email" value="" placeholder="email@domain.com" oninput={this.handleInput} />
            <Input type="password" className="text-center" id="userPass" ref="" name="userPass" value="" placeholder="password" oninput={this.handleInput} />
            <Button onClick={this.handleSubmit}>Login</Button>
          </Form>
          <a href="/SignUp"><Button>Sign Up</Button></a>
        </div>
      </div>
    );
  };
}
