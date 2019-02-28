import React from "react";
import { Media } from "react-bootstrap";

const reviewItem = () => {
  return (
    <Media>
      <img
        src="https://via.placeholder.com/50"
        width={50}
        height={50}
        className="mr-3"
        alt="user"
      />
      <Media.Body>
        <h6>user</h6>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis.
        </p>
      </Media.Body>
    </Media>
  );
};

export default reviewItem;
