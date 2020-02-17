  
import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import GuestLanding from "./Components/GuestLanding/GuestLanding";
import Post from "./Components/Post/Post";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={Form} path="/addPost" />
    <Route component={Post} exact path="/post/:post_id" />
    <Route
      render={() => {
        return <h1>404 Page Not Found.</h1>;
      }}
    />
  </Switch>
);