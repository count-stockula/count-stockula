import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";

class App extends Component {
  render() {
    return (
     <Router>
          <div className="App">
               <Nav />
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Page1" component={Page1} />
               </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
