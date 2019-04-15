import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Page1" component={Page1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
