import React, { Component } from "react";
import { Tab, Container, Row, Col } from "react-bootstrap";

//! components
import SideBar from "../../components/UserPages/BooksTable/SideBar/Sidebar";
import TableStructure from "../../components/UserPages/BooksTable/TableStructure/Table";

import styles from "./User.module.scss";

class booksTable extends Component {
  state = {
    // books: [
    //   {
    //     // cover: "http://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
    //     cover: "cover1",
    //     name: "ktab1",
    //     author: "Author1",
    //     avgRate: 3,
    //     rating: 5,
    //     shelve: "Read"
    //   },
    //   {
    //     cover: "cover2",
    //     name: "ktab2",
    //     author: "Author2",
    //     avgRate: 3,
    //     rating: 5,
    //     shelve: "Currently Reading"
    //   },
    //   {
    //     cover: "cover3",
    //     name: "ktab3",
    //     author: "Author3",
    //     avgRate: 3,
    //     rating: 5,
    //     shelve: "Want to Read"
    //   }
    // ],
    bookState: "all"
  };
  allBooksHandler = () => {
    this.setState({ bookState: "all" });
  };
  readHandler = () => {
    this.setState({ bookState: "Read" });
  };
  currentlyReadHandler = () => {
    this.setState({ bookState: "Currently Reading" });
  };
  toReadHandler = () => {
    this.setState({ bookState: "Want to Read" });
  };

  render() {
    return (
      <div className={styles.Tabs}>
        <Container fluid>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                {/* //! */}
                <SideBar
                  allBooks={this.allBooksHandler}
                  read={this.readHandler}
                  currentlyRead={this.currentlyReadHandler}
                  toRead={this.toReadHandler}
                />
              </Col>
              <Col sm={9}>
                <Tab.Content className={styles.Tabs__content}>
                  <Tab.Pane eventKey="first">
                    <h1>All Books Page</h1>
                    {/* //! */}
                    <TableStructure
                      books={this.props.books}
                      // books={[...this.state.books]}
                      bookState={this.state.bookState}
                    />
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <h1>Read Page</h1>
                    {/* //! */}
                    <TableStructure
                      books={this.props.books}
                      // books={[...this.state.books]}
                      bookState={this.state.bookState}
                    />
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <h1>Currently Reading Page</h1>
                    {/* //! */}
                    <TableStructure
                      books={this.props.books}
                      // books={[...this.state.books]}
                      bookState={this.state.bookState}
                    />
                  </Tab.Pane>

                  <Tab.Pane eventKey="fourth">
                    <h1>Want to Read Page</h1>
                    {/* //! */}
                    <TableStructure
                      books={this.props.books}
                      // books={[...this.state.books]}
                      bookState={this.state.bookState}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default booksTable;

// import React, { Component } from "react";
// import { Tab, Container, Row, Col } from "react-bootstrap";

// //! components
// import SideBar from "./SideBar/Sidebar";
// import TableStructure from "./TableStructure/Table";

// import styles from "./BooksTable.module.scss";

// class booksTable extends Component {
//   handleSelect = key => {
//     if (key === 1) this.props.allBooks.call();
//     else if (key === 2) this.props.read.call();
//     else if (key === 3) this.props.currentlyRead.call();
//     else if (key === 4) this.props.toRead.call();
//   };
//   render() {
//     return (
//       <div className={styles.Tabs}>
//         <Container fluid>
//           <Tab.Container
//             id="left-tabs-example"
//             defaultActiveKey={1}
//             onSelect={this.handleSelect()}
//           >
//             <Row>
//               <Col sm={3}>
//                 {/* //! */}
//                 <SideBar
//                   allBooks={this.props.allBooks}
//                   read={this.props.read}
//                   currentlyRead={this.props.currentlyRead}
//                   toRead={this.props.toRead}
//                 />
//               </Col>
//               <Col sm={9}>
//                 <Tab.Content className={styles.Tabs__content}>
//                   <Tab.Pane eventKey={1} title="Log in">
//                     <h1>All Books Page</h1>
//                     {/* //! */}
//                     <TableStructure />
//                   </Tab.Pane>

//                   <Tab.Pane eventKey={2} title="Sign up">
//                     <h1>Read Page</h1>
//                     {/* //! */}
//                     <TableStructure />
//                   </Tab.Pane>

//                   <Tab.Pane eventKey={3} title="Sign up">
//                     <h1>Currently Reading Page</h1>
//                     {/* //! */}
//                     <TableStructure />
//                   </Tab.Pane>

//                   <Tab.Pane eventKey={4} title="Sign up">
//                     <h1>Want to Read Page</h1>
//                     {/* //! */}
//                     <TableStructure />
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Col>
//             </Row>
//           </Tab.Container>
//         </Container>
//       </div>
//     );
//   }
// }

// export default booksTable;
