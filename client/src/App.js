import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Sales from "./pages/Sales/Sales";
import Page1 from "./pages/Page1";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Sales" component={Sales} />
            <Route exact path="/Page1" component={Page1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
