import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Categories.module.scss";

const categories = props => {
  return (
    <>
      <Navbar />
      <main className="main-padding">
        <h1>Categories Page</h1>
        <Container>
          <Row>
            <Col md={3} sm={6}>
              <div className={styles.Categories}>
                <ul>
                  <li>Economics</li>
                  <li>Sport</li>
                  <li>Society</li>
                  <li>Art</li>
                  <li>Horror</li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className={styles.Categories}>
                <ul>
                  <li>Economics</li>
                  <li>Sport</li>
                  <li>Society</li>
                  <li>Art</li>
                  <li>Horror</li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className={styles.Categories}>
                <ul>
                  <li>Economics</li>
                  <li>Sport</li>
                  <li>Society</li>
                  <li>Art</li>
                  <li>Horror</li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className={styles.Categories}>
                <ul>
                  <li>Economics</li>
                  <li>Sport</li>
                  <li>Society</li>
                  <li>Art</li>
                  <li>Horror</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default categories;
