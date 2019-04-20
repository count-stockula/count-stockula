import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default class Login extends PureComponent {
  state = {
    
  };

  render() {
    return (
      <>
        <div className="container px-0 w-100 pb-5">
          <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0">
            <Form id="login" method="POST" action="/Login">
                <Input type="email" className="text-center" id="email" name="email" value="" placeholder="email@domain.com" />
                <Input type="password" className="text-center" id="userPass" name="userPass" value="" placeholder="password" />
                <Button type="submit">Login</Button>
            </Form>
            <a href="/Scan"><Button>Sign Up</Button></a>
          </div>
        </div>
      </>
    );
  }
}
