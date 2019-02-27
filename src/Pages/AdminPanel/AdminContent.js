import React, { Component } from "react";
import styles from "./CategoriesPage/CategoriesPage.module.scss";
// import styles from "./CategoriesPage.module.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

//! component
import AddModal from "./AddModal/addModal";

class AdminContent extends Component {
  state = {
    modalShow: false
  };
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className={styles.AdminContent}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button
              size="lg"
              variant="outline-primary"
              onClick={this.props.onClickCategory}
            >
              Categories
            </Button>
            <Button
              size="lg"
              variant="outline-primary"
              onClick={this.props.onClickBooks}
            >
              Books
            </Button>
            <Button
              size="lg"
              variant="outline-primary"
              onClick={this.props.onClickAuther}
            >
              Authers
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <Button
              className={styles.btn}
              size="lg"
              variant="dark"
              onClick={() => this.setState({ modalShow: true })}
            >
              Add
            </Button>
            <AddModal show={this.state.modalShow} onHide={modalClose} />
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    );
  }
}

export default AdminContent;
