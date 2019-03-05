import React from "react";

import styles from "./BooksPage.module.scss";
import Table from "react-bootstrap/Table";
import BookItem from "./BookItem";

const books = props => {
  return (
    <div className={styles.CategoryPage}>
      <div className={styles.CategoryPage}>
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>photo</th>
              <th>name</th>
              <th>categoryId</th>
              <th>autherId</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.BookList.map((element, index) => (
              <BookItem
                key={index.toString()}
                name={element.name}
                id={element.id}
                photo={element.photo}
                categoryId={element.categoryId}
                autherId={element.autherId}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default books;
