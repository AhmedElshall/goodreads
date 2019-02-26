import React from "react";

const BookItem = props => {
  return (
    <tr>
      <td>{props.cover}</td>
      <td>{props.name}</td>
      <td>{props.author}</td>
      <td>{props.avgRate}</td>
      <td>{props.rating}</td>
      <td>{props.shelve}</td>
    </tr>
  );
};

export default BookItem;
