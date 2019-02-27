import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//! /
import styles from "./Categories.module.scss";

const categoryItem = props => {
  let categoryUrl = "/categories/:" + props.categoryId;
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
            pathname: categoryUrl
            // search: '?sort=name',
            // hash: '#the-hash',
            // state: { fromDashboard: true }
          }}
        >
          <p>{props.categoryName}</p>
        </Link>
      </div>
    </Col>
  );
};

export default categoryItem;
