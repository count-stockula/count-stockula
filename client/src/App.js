import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import TestAuth from "./pages/TestAuth/TestAuth";
import Scan from "./pages/Scan/Scan";
import Sales from "./pages/Sales/Sales";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddItem from "./pages/AddItem/AddItem";
import Inventory from "./pages/Inventory/Inventory";
import Settings from "./pages/Settings/Settings";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.Authenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.Authenticated = false;
    setTimeout(cb, 100); // fake async
  }
};

const CustomAuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <TestAuth {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            {/* if path works, try with exact path */}
            <CustomAuthRoute path="/testauth" component={TestAuth} />
            <Route exact path="/scan" component={Scan} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/additem" component={AddItem} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
