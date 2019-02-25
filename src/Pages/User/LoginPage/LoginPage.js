import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/images/logo.png";
import slogan from "../../../assets/images/slogan.png";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Form,
  FormControl
} from "react-bootstrap";

import styles from "./LoginPage.module.scss";

class login extends Component {
  //! schema
  formSchema = () => {
    const schema = Yup.object().shape({
      "First Name": Yup.string().required(),
      "Last Name": Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required()
    });
    return schema;
  };
  //! form
  form = props => {
    return (
      <form onSubmit={props.handleSubmit}>
        <h5>New here? Create a free account!</h5>
        <Form.Group>
          <Field
            name="First Name"
            type="text"
            className="form-control"
            placeholder="Enter Your First Name"
          />
          {/* <ErrorMessage name="First Name" /> */}
          <ErrorMessage
            name="First Name"
            render={() => (
              <div className="alert alert-danger" role="alert">
                First Name is required
              </div>
            )}
          />
        </Form.Group>
        <Form.Group>
          <Field
            name="Last Name"
            type="text"
            className="form-control"
            placeholder="Enter Your Last Name"
          />
          <ErrorMessage
            name="Last Name"
            render={() => (
              <div className="alert alert-danger" role="alert">
                Last Name is required
              </div>
            )}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Field
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
          />
          <ErrorMessage
            name="email"
            render={() => (
              <div className="alert alert-danger" role="alert">
                Email is required
              </div>
            )}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Field
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter Your Password"
          />
          <ErrorMessage
            name="password"
            render={() => (
              <div className="alert alert-danger" role="alert">
                Password is required
              </div>
            )}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control className={styles.file} type="file" id="file" />
          <label htmlFor="file" className="form-control">
            Upload Your Image
            <span className="upload-ico" />
          </label>
        </Form.Group>
        <div className={styles.SignUp__btn}>
          {/* //! */}
          <button
            type="submit"
            // ! here
            // ! here
            // ! here
            // ! here
            // onClick={this.props.logged}
            className="btn btn-primary"
          >
            Sign up
          </button>
          <Form.Text className="text-muted">
            By clicking “Sign up” I agree to the Goodreads Terms of Service and
            confirm that I am at least 13 years old.
          </Form.Text>
        </div>
      </form>
    );
  };
  render() {
    return (
      <>
        <header className={styles.Header}>
          {/* //! navbar */}
          <Navbar>
            <Container>
              <Navbar.Brand>
                <NavLink to="/" exact>
                  <img
                    src={logo}
                    width="200"
                    height="45"
                    className="d-inline-block align-top"
                    alt="Goodreads Logo"
                  />
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="ml-auto">
                  <FormControl
                    type="email"
                    placeholder="Email Address"
                    className="mr-sm-2"
                  />
                  <FormControl
                    type="password"
                    placeholder="Password"
                    className="mr-sm-2"
                  />
                  <Button onClick={this.props.logged} variant="success">
                    Sign in
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* //! banner */}
          <div className={styles.SignUp}>
            <Container>
              <Row className={styles.SignUp__image}>
                <Col md={8} className="text-center">
                  <img src={slogan} alt="slogan" width="445" height="115" />
                </Col>
                <Col md={4}>
                  {/* //! form */}
                  {/* //! form */}
                  {/* //! form */}
                  <Formik
                    // initialValues={{ name: "mostafa", email: "", type: "" }}
                    onSubmit={this.props.submit}
                    render={this.form}
                    validationSchema={this.formSchema()}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </header>
        {/* //! */}
        <section className={styles.Popular}>
          <Container>
            <Row>
              <Col sm={8}>
                <Row>
                  <Col sm={6}>
                    <div className={styles.Popular__item}>
                      <h4>Popular Authors</h4>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className={styles.Popular__item}>
                      <h4>Popular Books</h4>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className={styles.Popular__item}>
                      <h4>Popular Categories</h4>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>test</Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default login;

// import React from "react";
// import { Formik, Field } from "formik";
// import { NavLink } from "react-router-dom";
// import logo from "../../../assets/images/logo.png";
// import slogan from "../../../assets/images/slogan.png";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Navbar,
//   Form,
//   FormControl
// } from "react-bootstrap";

// import styles from "./LoginPage.module.scss";

// const login = props => {
//   return (
//     <>
//       <header className={styles.Header}>
//         {/* //! navbar */}
//         <Navbar>
//           <Container>
//             <Navbar.Brand>
//               <NavLink to="/" exact>
//                 <img
//                   src={logo}
//                   width="200"
//                   height="45"
//                   className="d-inline-block align-top"
//                   alt="Goodreads Logo"
//                 />
//               </NavLink>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Form inline className="ml-auto">
//                 <FormControl
//                   type="email"
//                   placeholder="Email Address"
//                   className="mr-sm-2"
//                 />
//                 <FormControl
//                   type="password"
//                   placeholder="Password"
//                   className="mr-sm-2"
//                 />
//                 <Button onClick={props.logged} variant="success">
//                   Sign in
//                 </Button>
//               </Form>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//         {/* //! banner */}
//         <div className={styles.SignUp}>
//           <Container>
//             <Row className="align-items-center">
//               <Col md={8} className="text-center">
//                 <img src={slogan} alt="slogan" width="445" height="115" />
//               </Col>
//               <Col md={4}>
//                 <Form onSubmit={props.submit}>
//                   <h5>New here? Create a free account!</h5>
//                   <Form.Group>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Your First Name"
//                     />
//                   </Form.Group>
//                   <Form.Group>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Your Last Name"
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="formBasicEmail">
//                     <Form.Control type="email" placeholder="Enter Your Email" />
//                   </Form.Group>
//                   <Form.Group controlId="formBasicPassword">
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter Your Password"
//                     />
//                   </Form.Group>
//                   <Form.Group>
//                     <Form.Control
//                       className={styles.file}
//                       type="file"
//                       id="file"
//                     />
//                     <label for="file" class="form-control">
//                       Upload Your Image
//                       <span class="upload-ico" />
//                     </label>
//                   </Form.Group>
//                   <div className={styles.SignUp__btn}>
//                     {/* //! */}
//                     <Button
//                       onClick={props.logged}
//                       variant="primary"
//                       type="submit"
//                     >
//                       Sign up
//                     </Button>
//                     <Form.Text className="text-muted">
//                       By clicking “Sign up” I agree to the Goodreads Terms of
//                       Service and confirm that I am at least 13 years old.
//                     </Form.Text>
//                   </div>
//                 </Form>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </header>
//       {/* //! */}
//       <section className={styles.Popular}>
//         <Container>
//           <Row>
//             <Col sm={8}>
//               <Row>
//                 <Col sm={6}>
//                   <div className={styles.Popular__item}>
//                     <h4>Popular Authors</h4>
//                   </div>
//                 </Col>
//                 <Col sm={6}>
//                   <div className={styles.Popular__item}>
//                     <h4>Popular Books</h4>
//                   </div>
//                 </Col>
//                 <Col sm={6}>
//                   <div className={styles.Popular__item}>
//                     <h4>Popular Categories</h4>
//                   </div>
//                 </Col>
//               </Row>
//             </Col>
//             <Col sm={4}>test</Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default login;
