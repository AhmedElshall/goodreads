import React from "react";
import { Button } from "react-bootstrap";

const login = props => {
  return (
    <div>
      <h1>user Login Page</h1>
      {/* <button onClick={props.logged}>login</button> */}
      <Button onClick={props.logged} variant="outline-primary">
        login
      </Button>
    </div>
  );
};

export default login;
