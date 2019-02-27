import React from "react";

//! component
import Navbar from "../../../components/Navbar/Navbar";
import BooksTable from "../../../containers/User/BooksTable";

const homePage = props => {
  return (
    <>
      <Navbar />
      <main>
        <BooksTable />
      </main>
    </>
  );
};

export default homePage;
