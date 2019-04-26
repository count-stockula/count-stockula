import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import SettingsForm from "../../components/Forms/SettingsForm"

export default class Settings extends PureComponent {
  state = {
      theStores: [],
      username: "",
      email: "",
      phoneNo: ""
      
  };

  componentDidMount = () => {
    API.getAllStores().then(res => {
      this.setState({theStores: res.data})
      console.log(res.data);
    })
  }

  render() {
    return (
      <>
        <PageHeader title="Settings" />
        <div className="row mainWrapper stretched">
          <div className="col red darken-4 inv centralContent">
            <SettingsForm 
            theStores={this.state.theStores}
            username={this.state.username} 
            email={this.state.email}
            phoneNo={this.state.email}
            />
          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}
