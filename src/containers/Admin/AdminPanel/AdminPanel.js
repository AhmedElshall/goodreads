import React, { Component } from "react";

import Login from "../../../Pages/AdminPanel/LoginPage/LoginPage";
import Categories from "../../../Pages/AdminPanel/CategoriesPage/CategoriesPage";
import Books from "../../../Pages/AdminPanel/BooksPage/BooksPage";
import Authers from "../../../Pages/AdminPanel/AuthersPage/AuthersPage";
import AdminContent from "../../../Pages/AdminPanel/AdminContent";
// import styles from "./AdminPanel.module.scss";

class AdminPanel extends Component {
  state = {
    username: "",
    password: "",
    admin: {
      adminName: "mostafa"
    },
    isLogged: false,
    loginShowed: true,
    categsShowed: false,
    booksShowed: false,
    authersShowed: false,

    bookList: [
      {
        id: 1,
        photo: "photp",
        name: "Aerodynamics",
        categoryId: 1,
        autherId: 1
      },
      {
        id: 1,
        photo: "photp",
        name: "Aerodynamics",
        categoryId: 1,
        autherId: 1
      }
    ],
    categoryList: [{ id: 1, name: "science" }, { id: 2, name: "it" }],
    autherList: [
      {
        id: 1,
        photo: "photp",
        firstName: "mohamed",
        lastName: "yasser",
        dateOfBirh: "1992"
      }
    ]
  };

  categsShowedHandler = () => {
    this.setState({
      categsShowed: true,
      booksShowed: false,
      authersShowed: false
    });
  };

  booksShowedHandler = () => {
    this.setState({
      booksShowed: true,
      categsShowed: false,
      authersShowed: false
    });
  };

  authersShowedHandler = () => {
    this.setState({
      authersShowed: true,
      categsShowed: false,
      booksShowed: false
    });
  };
  // fetch("", {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: {
  //     email: this.state.username,
  //     password: this.state.password
  //   }
  // }).then(res =>
  //   res
  //     .json()
  //     .then(test => this.setState({ isLogged: true, categsShowed: true }))
  // );
  loginValidation = event => {
    console.log("10");
    this.setState({ isLogged: true });
    this.setState({ categsShowed: true });
    event.preventDefault();
  };

  onChangeUserName = e => {
    console.log(e.target.value);
    const temp = e.target.value;
    this.setState({ username: temp });
    console.log(this.state.username);
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };

  render() {
    if (!this.state.isLogged) {
      return (
        <Login
          onSubmit={this.loginValidation}
          onChangeUserName={this.onChangeUserName}
          usernamwValue={this.state.username}
          onChangePassword={this.onChangePassword}
          // passwordValue
        />
      );
    } else {
      //! categories page
      if (this.state.categsShowed) {
        return (
          <div>
            <AdminContent
              onClickBooks={this.booksShowedHandler}
              onClickAuther={this.authersShowedHandler}
            />
            <Categories categoryList={[...this.state.categoryList]} />
          </div>
        );
      }

      //! books page
      else if (this.state.booksShowed) {
        return (
          <div>
            <AdminContent
              onClickCategory={this.categsShowedHandler}
              onClickAuther={this.authersShowedHandler}
            />
            <Books BookList={[...this.state.bookList]} />
          </div>
        );
      }

      //! authers page
      else if (this.state.authersShowed) {
        return (
          <div>
            <AdminContent
              onClickBooks={this.booksShowedHandler}
              onClickCategory={this.categsShowedHandler}
            />
            <Authers AutherList={[...this.state.autherList]} />
          </div>
        );
      }
    }

    //! open loginPage by default
  }
}

export default AdminPanel;
