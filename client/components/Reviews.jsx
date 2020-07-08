import React from 'react';

import {
  ReviewsComponent,
  ReviewsDiv,
} from '../styling/style.jsx';
import ReviewEntry from './ReviewEntry';

const Reviews = ({ reviews }) => {
  return (
    <ReviewsComponent>
      <div style={{ color: '#163f34', fontWeight: 'bold', fontSize: '30px' }}>
        Reviews
      </div>
      <ReviewsDiv>
        {
          reviews.map((review) => {
            return (
              <ReviewEntry review={review.review} reviewRating={review.rating} />
            )
          })
        }
      </ReviewsDiv>
    </ReviewsComponent>
  );
}

export default Reviews;
