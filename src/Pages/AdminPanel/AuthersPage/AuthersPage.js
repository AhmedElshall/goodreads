import React from "react";

// import styles from './AuthersPage.module.scss';

const authers = props => {
  return (
    <div>
      <button onClick={props.categsShowed}>Categories</button>
      <button onClick={props.booksShowed}>Books</button>
      <button onClick={props.authersShowed}>Authers</button>
      <h1>Authers Page</h1>
    </div>
  );
};

export default authers;
