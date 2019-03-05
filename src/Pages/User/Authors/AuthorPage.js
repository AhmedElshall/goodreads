import React, { Component } from "react";
import { Container } from "react-bootstrap";

//! component
import Navbar from "../../../components/Navbar/Navbar";
import RelatedData from "../../../components/RelatedData/RelatedData";
// import RelatedBook from "../../../components/RelatedData/RelatedBooks";

class authorItem extends Component {
  state = {
    authorName: "Mostafa Ali",
    relatedBooks: [
      { bookName: "ktab1", bookRating: 3, shelve: "Currently Reading" },
      { bookName: "ktab2", bookRating: 4, shelve: "Read" },
      { bookName: "ktab3", bookRating: 5, shelve: "Want to Read" }
    ]
  };
  render() {
    return (
      <>
        <Navbar />
        <main className="main-padding">
          <h1>Author Item Page</h1>
          <Container>
            <RelatedData authorName={this.state.authorName} />
            {/* <RelatedBook relatedBooks={[...this.state.relatedBooks]} /> */}
          </Container>
        </main>
      </>
    );
  }
}

export default authorItem;
