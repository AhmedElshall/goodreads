import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//! containers
import User from "../containers/User/User";

//! Pages
import Categories from "../containers/User/Categories";
import CategoryItem from "../Pages/User/Categories/CategoryItem";
import Books from "../Pages/User/Books/Books";
import BookItem from "../Pages/User/Books/BookItem";
import Authors from "../Pages/User/Authors/Authors";
import AuthorItem from "../Pages/User/Authors/AuthorItem";

// import LoginPage from "../LoginPage/LoginPage";

const homePage = props => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={User} />
          {/* <Route
            exact
            path="/"
            render={() => (true ? <User /> : <LoginPage />)}
          /> */}
          <Route path="/categories" exact component={Categories} />
          <Route
            path="/categories/:categoryId"
            render={() => <CategoryItem />}
            // render={() => <CategoryItem />}
          />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:bookId" render={() => <BookItem />} />
          <Route path="/authors" exact component={Authors} />
          <Route path="/authors/:authorId" render={() => <AuthorItem />} />
          {/* <Route path="/authors/:authorId" component={AuthorItem} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default homePage;
