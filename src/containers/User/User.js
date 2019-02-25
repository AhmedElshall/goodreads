import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "../../Pages/User/LoginPage/LoginPage";
import AllBooksPage from "../../Pages/User/HomePage/AllBooksPage/AllBooksPage";
import ReadPage from "../../Pages/User/HomePage/ReadPage/ReadPage";
import CurrentlyReadPage from "../../Pages/User/HomePage/CurrentlyReadPage/CurrentlyReadPage";
import WantToReadPage from "../../Pages/User/HomePage/WantToReadPage/WantToReadPage";

class User extends Component {
  state = {
    isLogged: false,
    loginShowed: true,
    allBooksShowed: false,
    readShowed: false,
    currentlyReadShowed: false,
    wantToReadShowed: false
  };

  isLoggedHandler = () => {
    this.setState({
      isLogged: true,
      loginShowed: false,
      allBooksShowed: true
    });
  };
  allBooksShowedHandler = () => {
    this.setState({
      allBooksShowed: true,
      readShowed: false,
      currentlyReadShowed: false,
      wantToReadShowed: false
    });
  };
  readShowedHandler = () => {
    this.setState({
      allBooksShowed: false,
      readShowed: true,
      currentlyReadShowed: false,
      wantToReadShowed: false
    });
  };
  currentlyReadShowedHandler = () => {
    this.setState({
      allBooksShowed: false,
      readShowed: false,
      currentlyReadShowed: true,
      wantToReadShowed: false
    });
  };
  wantToReadShowedHandler = () => {
    this.setState({
      allBooksShowed: false,
      readShowed: false,
      currentlyReadShowed: false,
      wantToReadShowed: true
    });
  };
  /////////////////////////////////////////////////////////////////////
  //! form validation
  submitFormHandler = value => {
    console.log(value);
  };

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
      //! all books page
      if (this.state.allBooksShowed) {
        return (
          <AllBooksPage
            allBooks={this.allBooksShowedHandler}
            read={this.readShowedHandler}
            currentlyRead={this.currentlyReadShowedHandler}
            toRead={this.wantToReadShowedHandler}
          />
        );
      }

      //! read page
      if (this.state.readShowed) {
        return (
          <ReadPage
            allBooks={this.allBooksShowedHandler}
            read={this.readShowedHandler}
            currentlyRead={this.currentlyReadShowedHandler}
            toRead={this.wantToReadShowedHandler}
          />
        );
      }

      //! currently reading page
      if (this.state.currentlyReadShowed) {
        return (
          <CurrentlyReadPage
            allBooks={this.allBooksShowedHandler}
            read={this.readShowedHandler}
            currentlyRead={this.currentlyReadShowedHandler}
            toRead={this.wantToReadShowedHandler}
          />
        );
      }

      //! want to read page
      if (this.state.wantToReadShowed) {
        return (
          <WantToReadPage
            allBooks={this.allBooksShowedHandler}
            read={this.readShowedHandler}
            currentlyRead={this.currentlyReadShowedHandler}
            toRead={this.wantToReadShowedHandler}
          />
        );
      }
    }

    // <BrowserRouter>
    //   <main className="App">
    //     <Switch>
    //       {/* <Redirect from="/" to="/" exact /> */}
    //       <Route
    //         path="/"
    //         render={routeProps => (
    //           <LoginPage {...routeProps} logged={this.allBooksShowedHandler} />
    //         )}
    //       />
    //     </Switch>
    //   </main>
    // </BrowserRouter>
  }
}

export default User;
