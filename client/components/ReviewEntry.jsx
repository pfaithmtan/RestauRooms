import React from 'react';

import {
  Review,
  ReadMoreButton,
} from '../styling/style.jsx';

const ReviewEntry = ({ review, reviewRating }) => {

  const handleReadMore = (event) => {
    console.log('SHOW MORE!')
  }

  let reviewDiv = <div>{review}</div>

  if (review.length > 180) {
    reviewDiv = <div>
      <span>
        {review.slice(0, 180)}...
      </span>
      <ReadMoreButton onClick={handleReadMore}>
        Read more
      </ReadMoreButton>
    </div>
  }

  return (
    <Review>
      {
        reviewDiv
      }
      <br />
      {'Overall rating:  '}
      {[...Array(reviewRating)].map(() =>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cleantoilet-4-1154430.png"
          alt="clean toilet rating"
          width="20"
          height="20"
        />
      )}
    </Review>
  );
}

export default ReviewEntry;
