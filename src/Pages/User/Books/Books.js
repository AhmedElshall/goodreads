import React from "react";

//! containers
import Blocks from "../../../containers/User/Blocks";

//! components
import Navbar from "../../../components/Navbar/Navbar";

const books = props => {
  return (
    <>
      <Navbar />
      <main className="main-padding">
        <h1>Books Page</h1>
        <Blocks />
      </main>
    </>
  );
};

export default books;
