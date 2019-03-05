import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Block.module.scss";

const Block = props => {
  let bookUrl = "/books/:" + props.bookId;
  let authorUrl = "/authors/:" + props.authorId;
  return (
    <Col md={3} sm={6}>
      <div className={styles.Block}>
        <img
          src="https://via.placeholder.com/150"
          alt=""
          width="150"
          height="150"
        />
        <Link
          to={{
            pathname: bookUrl,
            // search: '?sort=name',
            // hash: '#the-hash',
            state: { fromDashboard: true }
          }}
        >
          <p>book</p>
        </Link>
        <Link
          to={{
            pathname: authorUrl
          }}
        >
          <p>author</p>
        </Link>
      </div>
    </Col>
  );
};

export default Block;
