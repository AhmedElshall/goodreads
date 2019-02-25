import React from "react";

//! components
import Navbar from "../../../components/Navbar/Navbar";
import Blocks from "../../../components/UserPages/Blocks/Blocks";

const authors = props => {
  return (
    <>
      <Navbar />
      <main className="main-padding">
        <h1>Authors Page</h1>
        <Blocks />
      </main>
    </>
  );
};

export default authors;
