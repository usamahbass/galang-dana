import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Article from "../pages/article";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/article/:title" component={Article} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
