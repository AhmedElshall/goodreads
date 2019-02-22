import React from "react";

import styles from "./BooksPage.module.scss";

const books = props => {
  return (
    <div>
      <button className={styles.Button} onClick={props.categsShowed}>
        Categories
      </button>
      <button onClick={props.booksShowed}>Books</button>
      <button onClick={props.authersShowed}>Authers</button>
      <h1>Books Page</h1>
    </div>
  );
};

export default books;
