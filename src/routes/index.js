import React from "react";
import { Switch, Route } from "react-router-dom";
import PurchasePage from "../pages/purchase";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={PurchasePage} />
    </Switch>
  );
}
