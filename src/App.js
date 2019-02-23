import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//! containers
import AdminPanel from "./containers/Admin/AdminPanel/AdminPanel";
// import User from "./containers/User/User";

//! Pages
// import Categories from "./Pages/User/Categories/Categories";
// import Books from "./Pages/User/Books/Books";
// import Authors from "./Pages/User/Authors/Authors";
import HomePage from "./Pages/User/HomePage/HomePage";

//! components
// import Navbar from "./components/Navbar/Navbar";

import "./App.css";

class App extends Component {
  state = {
    isAdmin: true,
    isUser: false
  };

  render() {
    if (this.state.isUser) {
      return <HomePage />;
    }

    if (this.state.isAdmin) {
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
    }
  }
}

export default App;
