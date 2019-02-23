import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//! containers
import User from "../../../containers/User/User";

//! Pages
import Categories from "../Categories/Categories";
import Books from "../Books/Books";
import Authors from "../Authors/Authors";

//! components
// import Navbar from "../../../components/Navbar/Navbar";

const homePage = props => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="App">
          <Switch>
            {/* <Redirect from="/" to="/home" exact /> */}
            <Route path="/" exact component={User} />
            <Route path="/categories" component={Categories} />
            <Route path="/books" component={Books} />
            <Route path="/authors" component={Authors} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default homePage;
