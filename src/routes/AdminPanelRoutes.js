import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdminPanel from "../containers/Admin/AdminPanel/AdminPanel";

const adminRoutes = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Redirect from="/" to="/admin" exact /> */}
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default adminRoutes;
