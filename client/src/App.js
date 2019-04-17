import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Sales from "./pages/Sales/Sales";
import Dashboard from "./pages/Dashboard/Dashboard";
import Scan from "./pages/Scan/Scan";

class App extends PureComponent {
  render() {
    return (
      <Router>

        <div className="App">         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUp" />
            <Route exact path="/Login" />
            <Route exact path="/Scan" component={Scan} />
            <Route exact path="/Sales" component={Sales} />
            <Route exact path="/Inventory" />
            <Route exact path="/InventoryField" />
            <Route exact path="/AddItem" />
            <Route exact path="/AddItemField" />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Settings" />
          </Switch>
        </div>
      </Router>
    );
  }
} 

export default App;
