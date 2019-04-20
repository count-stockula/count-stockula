import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import AddItemForm from "../../components/Forms/AddItemForm";
import "./AddItem.css";

export default class AddItem extends PureComponent {
  state = {
    showForm: true,
  }

  render() {
    return (
      <>
        <PageHeader title="Add Item" />
        <div className="container px-0 w-100 d-flex">
          <div className="mx-auto col-10 col-lg-6 col-md-6 col-sm-10 col-xl-6 px-0">
            <div className="scanContainer">
              <h1 className={this.state.showForm ? "scanText  hide" : "scanText"}>START SCANNING
               <br className="scanBreak"></br>
                TO ADD NEW ITEM
              </h1>
              <AddItemForm isFormShown={this.state.showForm}></AddItemForm>
            </div>
          </div>
          </div>
        <BottomBar />
      </>
    );
  }
}
