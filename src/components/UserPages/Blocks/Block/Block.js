import React from "react";
import { Col } from "react-bootstrap";

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
        <a href="#">
          <p>{props.bookName}</p>
        </a>
        <a href="#">
          <p>{props.auther}</p>
        </a>
      </div>
    </Col>
  );
};

export default Block;
