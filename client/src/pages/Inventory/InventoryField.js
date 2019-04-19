import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import InventoryForm from "../../components/Forms/InventoryForm"

export default class InventoryField extends PureComponent {
  state = {
  }

  render() {
    return (
      <>
        <PageHeader title="Inventory" />
        <InventoryForm />
        <BottomBar />
      </>
    );
  }
}
