import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
// import axios from "axios";

//! component
import Block from "./Block/Block";

class Blocks extends Component {
  state = {
    blocks: [
      {
        authorId: "authorId1",
        bookName: "ktab1",
        authorName: "author1",
        bookId: "bookId1",
        cover: "cover1"
      },
      {
        authorId: "authorId2",
        bookName: "ktab2",
        authorName: "author2",
        bookId: "bookId2",
        cover: "cover2"
      },
      {
        authorId: "authorId3",
        bookName: "ktab3",
        authorName: "author3",
        bookId: "bookId3",
        cover: "cover3"
      }
    ],
    errorsInServer: false
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
    let blocks = (
      <p style={{ textAlign: "center" }}>Something Went Wrong with server</p>
    );
    if (!this.state.errorsInServer) {
      blocks = this.state.blocks.map(block => {
        return (
          <Block
            bookName={block.bookName}
            authorName={block.authorName}
            authorId={block.authorId}
            bookId={block.bookId}
            cover={block.cover}
          />
        );
      });
    }
    return (
      <Container>
        <Row>{blocks}</Row>
      </Container>
    );
  }
}

export default Blocks;
