import React from "react";

import styles from "./LoginPage.module.scss";

const login = props => {
  return (
    <div className={styles.AdminPanel}>
      <label htmlFor="" />
      <input type="text" />
      <button onClick={props.logged}>Log In</button>
    </div>
  );
};

export default login;
