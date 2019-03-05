import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Row } from "react-bootstrap";

//! pages
import CategoryItem from "../../Pages/User/Categories/Categories";

// import styles from "./Categories.module.scss";

class categories extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "economics" },
      { categoryId: 2, categoryName: "sports" },
      { categoryId: 3, categoryName: "society" },
      { categoryId: 4, categoryName: "art" },
      { categoryId: 5, categoryName: "horror" },
      { categoryId: 6, categoryName: "paranormal" },
      { categoryId: 7, categoryName: "fantasy" },
      { categoryId: 8, categoryName: "fiction" },
      { categoryId: 9, categoryName: "romance" }
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
    let categories = (
      <p style={{ textAlign: "center" }}>Something Went Wrong with server</p>
    );
    if (!this.state.errorsInServer) {
      categories = this.state.categories.map(category => {
        return (
          <CategoryItem
            categoryId={category.categoryId}
            categoryName={category.categoryName}
          />
        );
      });
    }
    return (
      <>
        <Navbar />
        <main className="main-padding">
          <h1>Categories Page</h1>
          <Container>
            <Row>{categories}</Row>
          </Container>
        </main>
      </>
    );
    // return (
    //   <>
    //     <Navbar />
    //     <main className="main-padding">
    //       <h1>Categories Page</h1>
    //       <Container>
    //         <Row>
    //           <Col md={3} sm={6}>
    //             <div className={styles.Categories}>
    //               <ul>
    //                 <li>Economics</li>
    //                 <li>Sport</li>
    //                 <li>Society</li>
    //                 <li>Art</li>
    //                 <li>Horror</li>
    //               </ul>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </main>
    //   </>
    // );
  }
}

export default categories;
