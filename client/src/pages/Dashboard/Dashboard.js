import React, { PureComponent } from 'react';
import API from "../../components/utils/API";
import Tabs from "../../components/Tabs/Tabs";
import List from "../../components/List/List"
import PageHeader from "../../components/Pageheader/Pageheader"
import BottomBar from "../../components/BottomBar/BottomBar"
import ListItem from "../../components/ListItem/ListItem"

export default class Dashboard extends PureComponent{     
     state = {
          inventoryList: [],
          value:"two"
     }

     handleTabChange = (event, value) => {
          const setVal = value;
          switch(value){
               case "one":
                    //API.getAllInventory("5cb3247aef86d68b5e0dc795").then(results =>  this.setState({inventoryList: results.data})); 
                    this.setState({inventoryList:
                         [{"currentQty":4,"criticalQty":10,"alertStatus":true,"_id":"5cb31f21ef86d68b5e0dc67d","name":"Diet Coke","description":"2L bottle","upc":"1111111","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":7,"criticalQty":10,"alertStatus":true,"_id":"5cb33340ef86d68b5e0dcbbf","name":"Red Bull","upc":"23455","description":"8 oz can","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":10,"criticalQty":10,"alertStatus":true,"_id":"5cb33cf7ef86d68b5e0dce44","name":"Chex Mix","upc":"23455","description":"4 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":14,"criticalQty":10,"alertStatus":true,"_id":"5cb33d14ef86d68b5e0dce4e","name":"Prune Juice","upc":"23455","description":"64 oz bottle","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3429def86d68b5e0dcfd3","name":"Bud Light","upc":"23455","description":"6 pack","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":3,"criticalQty":4,"alertStatus":true,"_id":"5cb3c7cdef86d68b5e0df779","name":"Jack Lins Beef Jerky","upc":"2455","description":"2.85 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c847ef86d68b5e0df79c","name":"Blueberry Pop Tarts","upc":"2455","description":"8 count box","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3c873ef86d68b5e0df7aa","name":"Kraft Easy Mac Original Flavor Macaroni & Cheese","upc":"2455","description":"2.05 Ounce Microwavable Cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":15,"criticalQty":10,"alertStatus":true,"_id":"5cb3c8d5ef86d68b5e0df7c9","name":"Bizzy Cold Brew Coffee","upc":"2455","description":"16 ox bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":8,"criticalQty":10,"alertStatus":true,"_id":"5cb3c90def86d68b5e0df7da","name":"Dole Bowls, Cherry Mixed in 100% Fruit Juice","upc":"2455","description":"4px 4 oz cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0}] 
                    });
                    break;
               case "three":
                    //API.getOutOfStock("5cb3247aef86d68b5e0dc795").then(results =>  this.setState({inventoryList: results.data})); 
                    this.setState({inventoryList:
                         [{"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3429def86d68b5e0dcfd3","name":"Bud Light","upc":"23455","description":"6 pack","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3c873ef86d68b5e0df7aa","name":"Kraft Easy Mac Original Flavor Macaroni & Cheese","upc":"2455","description":"2.05 Ounce Microwavable Cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0}]
                         });
                    break;
               default:
                    //API.getLowInventory("5cb3247aef86d68b5e0dc795").then(results =>  this.setState({inventoryList: results.data}));           
                    this.setState({inventoryList:
                         [{"currentQty":4,"criticalQty":10,"alertStatus":true,"_id":"5cb31f21ef86d68b5e0dc67d","name":"Diet Coke","description":"2L bottle","upc":"1111111","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":7,"criticalQty":10,"alertStatus":true,"_id":"5cb33340ef86d68b5e0dcbbf","name":"Red Bull","upc":"23455","description":"8 oz can","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":10,"criticalQty":10,"alertStatus":true,"_id":"5cb33cf7ef86d68b5e0dce44","name":"Chex Mix","upc":"23455","description":"4 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},{"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3429def86d68b5e0dcfd3","name":"Bud Light","upc":"23455","description":"6 pack","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":3,"criticalQty":4,"alertStatus":true,"_id":"5cb3c7cdef86d68b5e0df779","name":"Jack Lins Beef Jerky","upc":"2455","description":"2.85 oz bag","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":8,"criticalQty":10,"alertStatus":true,"_id":"5cb3c90def86d68b5e0df7da","name":"Dole Bowls, Cherry Mixed in 100% Fruit Juice","upc":"2455","description":"4px 4 oz cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0},
                         {"currentQty":0,"criticalQty":10,"alertStatus":true,"_id":"5cb3c873ef86d68b5e0df7aa","name":"Kraft Easy Mac Original Flavor Macaroni & Cheese","upc":"2455","description":"2.05 Ounce Microwavable Cups","storeId":"5cb3247aef86d68b5e0dc795","__v":0}]
                         });
                    break;
          }
          this.setState({value:setVal});
     };
     componentDidMount = () =>{
          API.getLowInventory("5cb3247aef86d68b5e0dc795").then(results =>  this.setState({inventoryList: results.data}));           
     }
     
     render(){
          return (
              <>
                    <PageHeader  title="Dashboard"/>
                    <div className="container">
                         <div className="mx-auto col-12 col-lg-5 col-md-6 col-xl-4 col-sm-8 px-0">
                              <Tabs tabClick={this.handleTabChange} value={this.state.value}/>
                         </div>
                    </div>
                    <div className="container pb-5" >
                         <div className="mx-auto col-12 col-lg-5 col-md-6 col-xl-4 col-sm-8 px-0">
                              <List>
                                   {this.state.inventoryList.map( item => <ListItem curQty = {item.currentQty} criticalQty = {item.criticalQty}  key = {item.currentQty} key={item._id}><span>{item.name} {item.description}</span><span>Current Qty: {item.currentQty}</span></ListItem>)}
                              </List>
                         </div>
                    </div>
                    <BottomBar/>
               </>
          );
     }
}
