import React, { Component } from "react";

//! Pages
import LoginPage from "../../Pages/User/LoginPage/LoginPage";
import HomePage from "../../Pages/User/HomePage/HomePage";

class User extends Component {
  state = {
    isLogged: false,
    loginShowed: true
  };

  isLoggedHandler = () => {
    this.setState({
      isLogged: true,
      loginShowed: false
    });
  };
  logoutHandler = () => {
    this.setState({
      isLogged: false,
      loginShowed: true
    });
  };
  /////////////////////////////////////////////////////////////////////
  //! form validation
  submitFormHandler = value => {
    console.log(value);
  };
  ////////////////////////////////////////////////////////////////////

  render() {
    //! user login page
    if (!this.state.isLogged) {
      return (
        <LoginPage
          logged={this.isLoggedHandler}
          submit={this.submitFormHandler}
        />
      );
    } else {
      //! user Homepage
      return <HomePage logout={this.logoutHandler} />;
    }
  }
}

export default User;
