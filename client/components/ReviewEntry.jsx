import React from 'react';

import {
  Review,
} from '../styling/style.jsx';

const ReviewEntry = ({ reviewDiv, reviewRating }) => {
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
