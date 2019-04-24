import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import Form from "../../components/Form/Form"

export default class Settings extends PureComponent {
  state = {};

  render() {
    return (
      <>
        <PageHeader title="Settings" />
        <div className="settingsContainer">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate"></input>
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" class="validate"></input>
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input disabled value="I am not editable" id="disabled" type="text" class="validate"></input>
                <label for="disabled">Disabled</label>
              </div>
            </div>
          </form>
        </div>
        </div>

        <BottomBar />
      </>
    );
  }
}
