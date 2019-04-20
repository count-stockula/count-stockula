import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"

export default class Inventory extends PureComponent {
  state = {
  }

  render() {
    return (
      <>
        <PageHeader title="Inventory" />
        
        
        <BottomBar />
      </>
    );
  }
}
