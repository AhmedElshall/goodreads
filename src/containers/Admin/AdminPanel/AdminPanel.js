import React, { Component } from "react";

import Login from "../../../Pages/AdminPanel/LoginPage/LoginPage";
import Categories from "../../../Pages/AdminPanel/CategoriesPage/CategoriesPage";
import Books from "../../../Pages/AdminPanel/BooksPage/BooksPage";
import Authers from "../../../Pages/AdminPanel/AuthersPage/AuthersPage";

// import styles from "./AdminPanel.module.scss";

class AdminPanel extends Component {
  state = {
    admin: {
      adminName: "mostafa"
    },
    isLogged: false,
    loginShowed: true,
    categsShowed: false,
    booksShowed: false,
    authersShowed: false
  };

  isLoggedHandler = () => {
    this.setState({
      isLogged: true,
      categsShowed: true,
      loginShowed: false
    });
  };

  categsShowedHandler = () => {
    this.setState({
      categsShowed: true,
      loginShowed: false,
      booksShowed: false,
      authersShowed: false
    });
  };

  booksShowedHandler = () => {
    this.setState({
      booksShowed: true,
      categsShowed: false,
      loginShowed: false,
      authersShowed: false
    });
  };

  authersShowedHandler = () => {
    this.setState({
      authersShowed: true,
      categsShowed: false,
      loginShowed: false,
      booksShowed: false
    });
  };

  render() {
    //! categories page
    if (this.state.categsShowed && this.state.isLogged) {
      return (
        <Categories
          booksShowed={this.booksShowedHandler}
          categsShowed={this.categsShowedHandler}
          authersShowed={this.authersShowedHandler}
        />
      );
    }

    //! books page
    if (this.state.booksShowed && this.state.isLogged) {
      return (
        <Books
          booksShowed={this.booksShowedHandler}
          categsShowed={this.categsShowedHandler}
          authersShowed={this.authersShowedHandler}
        />
      );
    }

    //! authers page
    if (this.state.authersShowed && this.state.isLogged) {
      return (
        <Authers
          booksShowed={this.booksShowedHandler}
          categsShowed={this.categsShowedHandler}
          authersShowed={this.authersShowedHandler}
        />
      );
    }

    //! open loginPage by default
    if (!this.state.isLogged) {
      return <Login logged={this.isLoggedHandler} />;
    }
  }
}

export default AdminPanel;
