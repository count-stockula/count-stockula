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
import API from "./components/utils/API";
import TestAuth from "./pages/TestAuth/TestAuth";
import Scan from "./pages/Scan/Scan";
import Sales from "./pages/Sales/Sales";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddItem from "./pages/AddItem/AddItem";
import Inventory from "./pages/Inventory/Inventory";
import Settings from "./pages/Settings/Settings";

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // toggle API.authenticate(true/false)
      API.authenticate(true) === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      redirectToReferrer: false,
      tokenCookie: false
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            {/* if path works, try with exact path */}
            <AuthRoute path="/testauth" component={TestAuth} />
            <Route exact path="/scan" component={Scan} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/additem" component={AddItem} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/settings" component={Settings} />
            {/* <Route exact path="/signout" component={SignOut} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
