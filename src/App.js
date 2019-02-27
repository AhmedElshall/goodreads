import React, { Component } from "react";

//! containers
import AdminPanelRoutes from "./routes/AdminPanelRoutes";

//! Pages
import HomePage from "./routes/HomePageRoutes";

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
      return <AdminPanelRoutes />;
    }
  }
}

export default App;
