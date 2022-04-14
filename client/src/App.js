import React from "react";
import { Route, Switch } from "react-router"
// import { Container } from '@material-ui/core';

import Header from './components/Header'

import Start from "./pages/Start";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
      <div className="App">
        <Header />
        <Switch>
          <Route strict exact path="/" component={Start} />
          <Route strict exact path="/home" component={Home} />
          <Route strict exact path="/classes" component={Classes} />
          <Route strict exact path="/login" component={Login} />
          <Route strict exact path="/signup" component={Signup} />

          <Route component={NoMatch} />
        </Switch>
      </div>
  );
}

export default App;