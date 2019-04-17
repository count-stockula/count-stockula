import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"

export default class Settings extends PureComponent {
  state = {
  }

  render() {
    return (
      <>
        <PageHeader title="Settings" />
        <div className="container px-0 w-100 pb-5" >
          <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0">

          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}