import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import AddItemForm from "../../components/Forms/AddItemForm"

export default class AddItemField extends PureComponent {
  state = {
  }

  render() {
    return (
      <>
        <PageHeader title="Add Item" />
            <AddItemForm />
        <BottomBar />
      </>
    );
  }
}
