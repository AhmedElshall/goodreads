import React from "react";

//! container
import BooksTable from "../../../containers/User/BooksTable";

//! component
import Navbar from "../../../components/Navbar/Navbar";

const homePage = props => {
  return (
    <>
      <Navbar logout={props.logout} />
      <main>
        <BooksTable />
      </main>
    </>
  );
};

export default homePage;
