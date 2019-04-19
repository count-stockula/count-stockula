import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default class SignUp extends PureComponent {
  state = {};

  render() {
    return (
      <>
        <PageHeader title="Login" />
          <div className="container px-0 w-100 pb-5">
            <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0">
              <Form id="login" method="GET" action="/Scan">
                  <Input type="email" className="form-control text-center" id="email" name="email" value="" placeholder="email@domain.com" />
                  <Input type="password" className="form-control text-center" id="password" name="password" value="" placeholder="password" />
                  <Input type="text" className="form-control text-center" id="3" name="3" value="3" placeholder="" readonly="readonly" />
                  <Input type="text" className="form-control text-center" id="4" name="4" value="4" placeholder="" readonly="readonly" />
                  <Input type="text" className="form-control text-center" id="5" name="5" value="5" placeholder="" readonly="readonly" />
                  <Button type="submit">Login</Button>
              </Form>
            </div>
          </div>
        <BottomBar />
      </>
    );
  }
}
