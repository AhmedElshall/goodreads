import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Block.module.scss";

const Block = props => {
  return (
    <Col md={3} sm={6}>
      <div className={styles.Block}>
        <img
          src="https://via.placeholder.com/150"
          alt=""
          width="150"
          height="150"
        />
        {/* <a href="#"> */}
        <Link
          to={{
            pathname: "/books/:bookId"
            // search: '?sort=name',
            // hash: '#the-hash',
            // state: { fromDashboard: true }
          }}
        >
          <p>book</p>
        </Link>
        <Link
          to={{
            pathname: "/authors/:authorId"
          }}
        >
          <p>author</p>
        </Link>
      </div>
    </Col>
  );
};

export default Block;
