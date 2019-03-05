import React from "react";

import styles from "./LoginPage.module.scss";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const login = props => {
  return (
    <div className={styles.AdminPanel}>
      <h2>Welcome TO Admin Panel </h2>

      {/* <button onClick={props.logged}>Log In</button> */}
      <Form className={styles.MyForm} onSubmit={props.onSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              required
              name="username"
              type="text"
              placeholder="Enter Your Name"
              onChange={props.onChangeUserName}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={props.onChangePassword}
            />
          </Col>
        </Form.Group>

        <Button variant="dark" type="submit" size="lg">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default login;
