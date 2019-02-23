
import React from "react";
import styles from "./CategoriesPage/CategoriesPage.module.scss";
// import styles from "./CategoriesPage.module.scss";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
const AdminContent = props => {
  return (
    <div className={styles.AdminContent}>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button size="lg" variant="outline-primary" onClick={ props.onClickCategory}>Categories</Button>
      <Button size="lg" variant="outline-primary" onClick={ props.onClickBooks} >Books</Button>
      <Button size="lg" variant="outline-primary" onClick={ props.onClickAuther} >Authers</Button>
    </InputGroup.Prepend>
    </InputGroup> 
    <InputGroup >
    <InputGroup.Prepend>
      <Button className={styles.btn} size="lg" variant="dark">Add</Button>
    </InputGroup.Prepend>
    </InputGroup> 
    </div>
  );
};

export default AdminContent;


  