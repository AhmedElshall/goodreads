import React from "react";

const currentlyReadPage = props => {
  return (
    <div>
      <h1>currently Read Page</h1>
      <button onClick={props.allBooks}>All</button>
      <button onClick={props.read}>Read</button>
      <button onClick={props.currentlyRead}>Currently Reading</button>
      <button onClick={props.toRead}>Want to Read</button>
    </div>
  );
};

export default currentlyReadPage;
