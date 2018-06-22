import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Wellcome from "./wellcome";
import GameRoot from "./gameRoot";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Wellcome} />
      <Route path="/game/:nickname" component={GameRoot} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
