import React, { PureComponent } from "react";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import ContainedButtons from "../../components/ContainedButtons/ContainedButtons";
import API from "../../components/utils/API";

export default class Scan extends PureComponent {
  state = {};

  componentWillMount = () => {
    API.authenticate()
      .then(results => this.setState({}))
      .catch(error => this.props.history.push("/"));
  };

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
