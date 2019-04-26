import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import SettingsForm from "../../components/Forms/SettingsForm"

export default class Settings extends PureComponent {
  state = {};

  render() {
    return (
      <>
        <PageHeader title="Settings" />
        <div className="row mainWrapper stretched">
          <div className="col black inv centralContent">
            <SettingsForm />
          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}
