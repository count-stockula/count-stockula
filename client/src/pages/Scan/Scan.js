import React, { PureComponent } from "react";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import ContainedButtons from "../../components/ContainedButtons/ContainedButtons";

export default class Scan extends PureComponent {
  state = {};

  render() {
    return (
      <>
        <PageHeader title="Scan" />
        <div className="row mainWrapper centered">
          <ContainedButtons />
          <BottomBar />
        </div>
      </>
    );
  }
}
