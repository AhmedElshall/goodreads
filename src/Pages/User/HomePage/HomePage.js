import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//! containers
import User from "../../../containers/User/User";

//! Pages
import Categories from "../Categories/Categories";
// import CategoryItem from "../Categories/CategoryItem";
import CategoriesPage from "../Categories/CategoriesPage";
import Books from "../Books/Books";
import BookItem from "../Books/BookItem";
import Authors from "../Authors/Authors";
import AuthorItem from "../Authors/AuthorItem";

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
          {/* <Route path="/categories/:categoryId" component={CategoryItem} /> */}
          <Route path="/categories" exact component={Categories} />
          <Route
            path="/categories/:categoryId"
            render={() => <CategoriesPage />}
            // render={() => <CategoryItem />}
          />
          {/* <Route path="/books/:bookId" component={BookItem} /> */}
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
