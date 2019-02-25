import React from "react";

//! component
import Navbar from "../../../../components/Navbar/Navbar";
import BooksTable from "../../../../components/UserPages/BooksTable/BooksTable";

const homePage = props => {
  return (
    <>
      <Navbar />
      <main>
        <BooksTable
          allBooks={props.allBooks}
          read={props.read}
          currentlyRead={props.currentlyRead}
          toRead={props.toRead}
        />
        {/* <button onClick={props.allBooks}>All</button>
        <button onClick={props.read}>Read</button>
        <button onClick={props.currentlyRead}>Currently Reading</button>
        <button onClick={props.toRead}>Want to Read</button> */}
      </main>
    </>
  );
};

export default homePage;
