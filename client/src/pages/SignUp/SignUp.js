import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

export default class SignUp extends PureComponent {
  state = {};

  render() {
    return (
      <>
        <PageHeader title="Login" />
          <div className="container px-0 w-100 pb-5">
            <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0">
              <Form>
                <>
                  <input type="text" class="form-control text-center" id="3" name="3" value="3" readonly="readonly" />
                  <input type="text" class="form-control text-center" id="3" name="3" value="3" readonly="readonly" />
                  <input type="text" class="form-control text-center" id="3" name="3" value="3" readonly="readonly" />
                </>
              </Form>
            </div>
          </div>
        <BottomBar />
      </>
    );
  }
}
