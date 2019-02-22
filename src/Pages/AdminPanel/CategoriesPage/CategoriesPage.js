import React from "react";

// import styles from "./CategoriesPage.module.scss";

const categories = props => {
  return (
    <div>
      <button onClick={props.categsShowed}>Categories</button>
      <button onClick={props.booksShowed}>Books</button>
      <button onClick={props.authersShowed}>Authers</button>
      <h1>Categories Page</h1>
    </div>
  );
};

export default categories;
