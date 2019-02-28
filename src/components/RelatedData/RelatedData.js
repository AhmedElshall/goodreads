import React from "react";
import { Link } from "react-router-dom";
import { Media } from "react-bootstrap";
//        bookName={block.bookName}
//         authorName={block.authorName}
//         authorId={block.authorId}
//         bookId={block.bookId}
//         cover={block.cover}
const relatedData = props => {
  let authorUrl = "/authors/:" + props.authorId;
  let categoryUrl = "/categories/:" + props.categoryId;
  return (
    <>
      <div>
        <Media>
          <img
            src="https://via.placeholder.com/150"
            width={150}
            height={150}
            className="mr-3"
            alt="Book cover"
          />
          <Media.Body>
            <h5>{props.bookName}</h5>
            <Link
              to={{
                pathname: authorUrl
              }}
            >
              {props.authorName}
            </Link>
            <br />
            <Link
              to={{
                pathname: categoryUrl
              }}
            >
              {props.categoryName}
            </Link>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </div>
    </>
  );
};

export default relatedData;
