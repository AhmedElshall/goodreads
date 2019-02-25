import React from "react";
import { Tab, Container, Row, Col } from "react-bootstrap";

//! components
import SideBar from "./SideBar/Sidebar";
import TableStructure from "./TableStructure/Table";

import styles from "./BooksTable.module.scss";

const booksTable = props => {
  return (
    <div className={styles.Tabs}>
      <Container fluid>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              {/* //! */}
              <SideBar
                allBooks={props.allBooks}
                read={props.read}
                currentlyRead={props.currentlyRead}
                toRead={props.toRead}
              />
            </Col>
            <Col sm={9}>
              <Tab.Content className={styles.Tabs__content}>
                <Tab.Pane eventKey="first">
                  <h1>All Books Page</h1>
                  {/* //! */}
                  <TableStructure />
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h1>Read Page</h1>
                  {/* //! */}
                  <TableStructure />
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <h1>Currently Reading Page</h1>
                  {/* //! */}
                  <TableStructure />
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <h1>Want to Read Page</h1>
                  {/* //! */}
                  <TableStructure />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

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
