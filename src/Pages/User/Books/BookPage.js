import React, { Component } from "react";
import { Container } from "react-bootstrap";

//! component
import Navbar from "../../../components/Navbar/Navbar";
import RelatedData from "../../../components/RelatedData/RelatedData";
import RelatedReviews from "../../../components/RelatedData/Reviews";

class bookPage extends Component {
  state = {
    bookId: "bookId1",
    authorId: "authorId1",
    categoryId: "categoryId1",
    bookName: "ktab",
    authorName: "author1",
    categoryName: "category1"
  };

  // componentDidMount() {
  //   axios
  //     .get("/posts")
  //     .then(respnse => {
  //       const blocks = respnse.data.slice(0, 8);
  //       const updatedBlocks = blocks.map(block => {
  //         return { ...block, author: "mostafa ali" };
  //       });
  //       this.setState({ blocks: updatedBlocks });
  //       console.log(respnse);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({ errorsInServer: true });
  //     });
  // }

  render() {
    return (
      <>
        <Navbar />
        <main className="main-padding">
          <h1>Book Item Page</h1>
          <Container>
            <RelatedData
              // bookData={[...this.state.bookData]}
              bookId={this.state.bookId}
              bookName={this.state.bookName}
              authorName={this.state.authorName}
              categoryName={this.state.categoryName}
              authorId={this.state.authorId}
              categoryId={this.state.categoryId}
            />
            <RelatedReviews />
          </Container>
        </main>
      </>
    );
  }
}

export default bookPage;
