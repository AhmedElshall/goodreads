import React from "react";
import StarRatingComponent from "react-star-rating-component";

const BookItem = props => {
  return (
    <tr>
      <td>{props.cover}</td>
      <td>{props.name}</td>
      <td>{props.author}</td>
      {/* <td>{props.avgRate}</td> */}
      <td>
        <StarRatingComponent
          name={props.name}
          starCount={5}
          value={props.avgRate}
          onStarClick={props.toRate}
        />
      </td>
      {/* <td>{props.rating}</td> */}
      <td>
        <StarRatingComponent
          name={props.name}
          starCount={5}
          value={props.rating}
          onStarClick={props.toRate}
        />
      </td>
      <td>{props.shelve}</td>
    </tr>
  );
};

export default BookItem;
