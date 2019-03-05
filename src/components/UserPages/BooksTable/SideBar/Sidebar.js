import React from "react";
import { Nav } from "react-bootstrap";

import styles from "./Sidebar.module.scss";

const sideBar = props => {
  return (
    <Nav variant="pills" className={[styles.Sidebar, "flex-column"]}>
      <Nav.Item className={styles.Sidebar__navItem}>
        <Nav.Link eventKey="first" onClick={props.allBooks}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.Sidebar__navItem}>
        <Nav.Link eventKey="second" onClick={props.read}>
          Read
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.Sidebar__navItem}>
        <Nav.Link eventKey="third" onClick={props.currentlyRead}>
          Currently Reading
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.Sidebar__navItem}>
        <Nav.Link eventKey="fourth" onClick={props.toRead}>
          Want to Read
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default sideBar;
