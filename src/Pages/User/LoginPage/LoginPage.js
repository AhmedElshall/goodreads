import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import slogan from "../../../assets/images/slogan.png";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Form,
  FormControl
} from "react-bootstrap";

import styles from "./LoginPage.module.scss";

const login = props => {
  return (
    <>
      <header className={styles.Header}>
        {/* //! navbar */}
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <NavLink to="/" exact>
                <img
                  src={logo}
                  width="200"
                  height="45"
                  className="d-inline-block align-top"
                  alt="Goodreads Logo"
                />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline className="ml-auto">
                <FormControl
                  type="email"
                  placeholder="Email Address"
                  className="mr-sm-2"
                />
                <FormControl
                  type="password"
                  placeholder="Password"
                  className="mr-sm-2"
                />
                <Button onClick={props.logged} variant="success">
                  Sign in
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* //! banner */}
        <div className={styles.SignUp}>
          <Container>
            <Row className="align-items-center">
              <Col md={8} className="text-center">
                <img src={slogan} alt="slogan" width="445" height="115" />
              </Col>
              <Col md={4}>
                <Form>
                  <h5>New here? Create a free account!</h5>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className={styles.SignUp__btn}>
                    {/* //! */}
                    <Button
                      onClick={props.logged}
                      variant="primary"
                      type="submit"
                    >
                      Sign up
                    </Button>
                    <Form.Text className="text-muted">
                      By clicking “Sign up” I agree to the Goodreads Terms of
                      Service and confirm that I am at least 13 years old.
                    </Form.Text>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      {/* //! */}
      <section className={styles.Popular}>
        <Container>
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={6}>
                  <div className={styles.Popular__item}>
                    <h4>Popular Authors</h4>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={styles.Popular__item}>
                    <h4>Popular Books</h4>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={styles.Popular__item}>
                    <h4>Popular Categories</h4>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>test</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default login;
