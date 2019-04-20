import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Tabs from "../../components/Tabs/Tabs";
import List from "../../components/List/List";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import ListItem from "../../components/ListItem/ListItem";

export default class Dashboard extends PureComponent {
  state = {
    inventoryList: [],
    value: "two"
  };

  handleTabChange = (event, value) => {
    const setVal = value;
    switch (value) {
      case "one":
        API.getAllItems().then(results =>
          this.setState({ inventoryList: results.data })
        );

        break;
      case "three":
        API.getZeroStock().then(results =>
          this.setState({ inventoryList: results.data })
        );

        break;
      default:
        API.getLowStock().then(results =>
          this.setState({ inventoryList: results.data })
        );
        break;
    }
    this.setState({ value: setVal });
  };
  componentDidMount = () => {
    API.getLowStock().then(results =>
      this.setState({ inventoryList: results.data })
    );
  };

  render() {
    return (
      <>
        <PageHeader title="Dashboard" />
        <div className="container px-0 w-100">
          <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0">
            <Tabs tabClick={this.handleTabChange} value={this.state.value} />
          </div>
        </div>
        <div className="container px-0 w-100 pb-5">
          <div className="mx-auto col-12 col-lg-8 col-md-8 col-sm-10 col-xl-7 px-0">
            <List>
              {this.state.inventoryList.map(item => (
                <ListItem
                  curQty={item.currentQty}
                  criticalQty={item.criticalQty}
                  key={item._id}
                >
                  <span>
                    {item.name} {item.description}
                  </span>
                  <span>Current Qty: {item.currentQty}</span>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <BottomBar />
      </>
    );
  }
}
