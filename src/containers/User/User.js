import React, { Component } from "react";

//! Pages
import LoginPage from "../../Pages/User/LoginPage/LoginPage";
import HomePage from "../../Pages/User/HomePage/HomePage";

class User extends Component {
  state = {
    isLogged: false,
    loginShowed: true,
    username: "",
    password: ""
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
  onChangeUserName = e => {
    const updatedUserName = e.target.value;
    this.setState({ username: updatedUserName });
    // console.log(this.state.username);
    // console.log(updatedUserName);
  };

  onChangePassword = e => {
    const updatedPassword = e.target.value;
    this.setState({ password: updatedPassword });
    // this.setState({ password: e.target.value });
    // console.log(updatedPassword);
    // console.log(this.state.password);
  };

  loginSubmitHandler = event => {
    console.log(this.state.username);
    console.log(this.state.password);
    fetch("http://localhost:5000/admin/login", {
      method: "post",
      body: {
        email: this.state.username,
        password: this.state.password
      }
    })
      .then(res => res.json())
      .then(admin => {
        this.setState({ isLogged: true, loginShowed: false });
        console.log(admin);
      });
    event.preventDefault();
  };
  // event.preventDefault();

  newUserSubmitHandler = value => {
    console.log(value);
  };

  ////////////////////////////////////////////////////////////////////

  render() {
    //! user login page
    if (!this.state.isLogged) {
      return (
        <LoginPage
          // logged={this.isLoggedHandler}
          newUserSubmit={this.newUserSubmitHandler}
          onChangeUserName={this.onChangeUserName}
          onChangePassword={this.onChangePassword}
          loginSubmit={this.loginSubmitHandler}
        />
      );
    } else {
      //! user Homepage
      return <HomePage logout={this.logoutHandler} />;
    }
  }
}

export default User;
