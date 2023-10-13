import React from "react";
import { Rating } from "react-craftify-core";
import message from "react-craftify-core/Message";

const MyComponent = () => {
  const [rating, setRating] = React.useState(null);

  const handleRatingChange = (rating) => {
    // Alert the rating ;)
    message(`Rating: ${rating}/5`, "success");
    setRating(rating);
  };

  return (
    <Rating
      rating={rating}
      handleRatingChange={handleRatingChange}
    />
  );
};

export default MyComponent;
