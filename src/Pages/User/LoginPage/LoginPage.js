import React from "react";

const login = props => {
  return (
    <div>
      <h1>user Login Page</h1>
      <button onClick={props.logged}>login</button>
    </div>
  );
};

export default login;
