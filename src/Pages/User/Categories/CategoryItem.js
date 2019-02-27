import React from "react";

//! components
import Navbar from "../../../components/Navbar/Navbar";
import Blocks from "../../../containers/User/Blocks";

const category = props => {
  return (
    <>
      <Navbar />
      <main className="main-padding">
        <h1>Category Item Page</h1>
        <Blocks />
      </main>
    </>
  );
};

export default category;
