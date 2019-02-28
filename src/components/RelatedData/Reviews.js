import React from "react";

import ReviewItem from "./ReviewItem";

const reviews = () => {
  return (
    <div className="main-padding">
      <h2>Related Reviews</h2>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
};

export default reviews;
