import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Tabs from "../../components/Tabs/Tabs";
import List from "../../components/List/List";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import ListItem from "../../components/ListItem/ListItem";
import "./StoreSales.css"

export default class Dashboard extends PureComponent {
  state = {
    sales: [],
    theStores: [],
    curStore: "0",
    curTab: "two"
  };
  componentDidMount = () => {
    API.getAllStores().then(results => {
      this.setState({ theStores: results.data });
    });
    API.getStoreSales().then(results => {
      this.setState({ sales: results.data });
    });
  };

  filterStore = event => {
    let storeNumber = event.target.value;
    this.setState({ curStore: storeNumber }, () => {     
          API.getStoreSales(this.state.curStore).then(results =>
            this.setState({ sales: results.data })
          );
      });
         
  };
render() {
  return (
    <>
      <PageHeader title="Store Sales" />
      <div className="row dashboard mainWrapper topped">
        <div className="dashboard centralContent">
          <div className="topFixed s12">
            <select onChange={this.filterStore}>
              <option defaultValue="" value="">
                All Stores
              </option>
              {this.state.theStores.map(item => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <List>
            {this.state.sales.map(item => (
              <ListItem
                key={item._id}
              >
                <div className="row">
                  <div>
                    <h5>{item.storeId.name}, {item.storeId.street}, {item.storeId.city} {item.storeId.state} </h5>
                    <p>{new Date(item.purchaseDate).toLocaleDateString()} {new Date(item.purchaseDate).toLocaleTimeString('en-US')}</p>
                  </div>
                  {item.items.map( (product, i) =>(
                    <div className="purchaseItem" key={i}>{product.name}</div>
                  ))}                  
                </div>
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