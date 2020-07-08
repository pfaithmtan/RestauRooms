import React from 'react';

import {
  ReviewsComponent,
  ReviewsDiv,
} from '../styling/style.jsx';
import ReviewEntry from './ReviewEntry';

const Reviews = ({ reviews, restaurantName }) => {
  let title = 'Reviews will appear here'

  if (reviews.length) {
    title = `Reviews for ${restaurantName}`
  } else if (restaurantName && !reviews.length) {
    title = `Be the first to write a review for ${restaurantName}`
  }

  return (
    <ReviewsComponent>
      <div style={{ color: '#163f34', fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}>
        {title}
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
