import React, { PureComponent } from "react";
import API from "../../components/utils/API";
import Tabs from "../../components/Tabs/Tabs";
import List from "../../components/List/List";
import PageHeader from "../../components/Pageheader/Pageheader";
import BottomBar from "../../components/BottomBar/BottomBar";
import ListItem from "../../components/ListItem/ListItem";
import "./Dashboard.css";

export default class Dashboard extends PureComponent {
  state = {
    inventoryList: [],
    theStores: [],
    curStore:"0",
    value: "two"
  };

  handleTabChange = (event, value) => {
    const setVal = value;
    console.log(this.state)
    switch (value) {
      case "one":
        API.getAllItems(this.state.curStore).then(results =>
          this.setState({ inventoryList: results.data })
        );

        break;
      case "three":
        API.getZeroStock(this.state.curStore).then(results =>
          this.setState({ inventoryList: results.data })
        );

        break;
      default:
        API.getLowStock(this.state.curStore).then(results =>
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
    API.getAllStores().then(results =>{
          this.setState({ theStores: results.data })
    })
  };
  filterStore = event =>{
       console.log(event.target.value)
     let storeNumber = event.target.value;
     this.setState({ curStore:storeNumber })
     // API.getAllItems(storeNumber).then(results => {
          
     // })
  }
  render() {
    return (
      <>
        <PageHeader title="Dashboard" />
          <div className="row dashboard mainWrapper topped">
               <div className="dashboard centralContent">                   
                    <div className="topFixed s12">
                         <select onChange={this.filterStore}>
                              <option defaultValue="0" value="0">All Stores</option>  
                              {this.state.theStores.map( item => (
                                   <option key={item._id} value={item._id}>{item.name}</option>
                              ))}                            
                         </select>
                    
                         <Tabs tabClick={this.handleTabChange} value={this.state.value} />
                    </div> 
                    <List>
                    {this.state.inventoryList.map(item => (
                         <ListItem
                         curQty={item.currentQty}
                         criticalQty={item.criticalQty}
                         key={item._id}
                         >
                         <div className="row">
                         <span className="col s9">
                              {item.name} {item.description}
                         </span>
                         <span className="col s3"> Current Qty: {item.currentQty}</span>
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
