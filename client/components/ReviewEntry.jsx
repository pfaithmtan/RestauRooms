import React, { useState } from 'react';

import {
  Review,
  ReadMoreButton,
} from '../styling/style.jsx';

const ReviewEntry = ({ review, reviewRating }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(true);
  }

  let reviewDiv = <div>{review}</div>

  if (review.length > 180) {
    reviewDiv = <div>
      <span>
        {review.slice(0, 180)}...
      </span>
      <ReadMoreButton
        style={{
          display: (readMore ? 'none' : 'visible')
        }}
        onClick={handleReadMore}
      >
        Read more
      </ReadMoreButton>
    </div>
  }

  if (readMore) {
    reviewDiv = <div>{review}</div>
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
