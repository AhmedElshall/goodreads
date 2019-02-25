import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

//! component
import Block from "./Block/Block";

class Blocks extends Component {
  state = {
    blocks: [
      // { id: 1, bookName: "ktab 7yaty ya 3eni", auther: "hasan el asmer" },
      // { id: 2, bookName: "madinat el baha2em", auther: "mostafa ali" },
      // { id: 3, bookName: "kitab 3", auther: "ay name" }
    ],
    errorsInServer: false
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(respnse => {
        const blocks = respnse.data.slice(0, 8);
        const updatedBlocks = blocks.map(block => {
          return { ...block, author: "mostafa ali" };
        });
        this.setState({ blocks: updatedBlocks });
        console.log(respnse);
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorsInServer: true });
      });
  }

  render() {
    let blocks = (
      <p style={{ textAlign: "center" }}>Something Went Wrong with server</p>
    );
    if (!this.state.errorsInServer) {
      blocks = this.state.blocks.map(block => {
        return (
          <Block key={block.id} bookName={block.title} auther={block.body} />
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
