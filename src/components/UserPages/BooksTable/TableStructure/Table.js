import React from "react";
import { Table } from "react-bootstrap";

import BookItem from "../BookItem/BookItem";

const table = props => {
  let renderedBooks = [];
  renderedBooks =
    props.bookState === "All"
      ? [...props.books]
      : props.books.filter(book => book.shelve === props.bookState);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>cover</th>
          <th>Name</th>
          <th>Author</th>
          <th>Avg Rate</th>
          <th>Rating</th>
          <th>Shelve</th>
        </tr>
      </thead>
      <tbody>
        {renderedBooks.map((book, index) => (
          <BookItem
            key={index.toString()}
            cover={book.photo}
            name={book.bookName}
            author={book.authorName}
            avgRate={book.ratte}
            rating={book.ratte}
            shelve={book.status}
            toRate={props.toRate}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default table;
