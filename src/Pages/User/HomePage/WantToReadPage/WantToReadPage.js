import React from "react";

const wantToReadPage = props => {
  return (
    <div>
      <h1>Want to read Page</h1>
      <button onClick={props.allBooks}>All</button>
      <button onClick={props.read}>Read</button>
      <button onClick={props.currentlyRead}>Currently Reading</button>
      <button onClick={props.toRead}>Want to Read</button>
    </div>
  );
};

export default wantToReadPage;
