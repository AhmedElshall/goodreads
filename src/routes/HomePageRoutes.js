import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//! containers
import User from "../containers/User/User";
import Categories from "../containers/User/Categories";

//! Pages
import CategoryPage from "../Pages/User/Categories/CategoryPage";
import Books from "../Pages/User/Books/Books";
import BookPage from "../Pages/User/Books/BookPage";
import Authors from "../Pages/User/Authors/Authors";
import AuthorPage from "../Pages/User/Authors/AuthorPage";

// import LoginPage from "../LoginPage/LoginPage";

const homePage = props => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            // component={User}
            render={() => <User />}
          />
          {/* <Route
            exact
            path="/"
            render={() => (true ? <User /> : <LoginPage />)}
          /> */}
          <Route path="/categories" exact component={Categories} />
          <Route
            path="/categories/:categoryId"
            render={() => <CategoryPage />}
            // render={() => <CategoryItem />}
          />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:bookId" render={() => <BookPage />} />
          <Route path="/authors" exact component={Authors} />
          <Route path="/authors/:authorId" render={() => <AuthorPage />} />
          {/* <Route path="/authors/:authorId" component={AuthorItem} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default homePage;
