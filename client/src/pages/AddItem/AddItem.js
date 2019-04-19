import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import ScanStartAddNewItem from "../../components/ScanStart/ScanStartAddNewItem";

export default class AddItem extends PureComponent {
  state = {
    showForm: false,
  }
  
  render() {
    return (
      <>
        <PageHeader title="Add Item" />
            <ScanStartAddNewItem isFormShown={this.state.showForm} />
        <BottomBar />
      </>
    );
  }
}
