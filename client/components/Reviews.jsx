import React from 'react';

import {
  ReviewsComponent,
  ReviewsDiv,
  ReadMoreButton,
  Review,
} from '../styling/style.jsx';
import ReviewEntry from './ReviewEntry';

const Reviews = ({ reviews }) => {

  const handleReadMore = (event) => {
    console.log('button clicked!')
  }

  return (
    <ReviewsComponent>
      <div style={{ color: '#163f34', fontWeight: 'bold', fontSize: '30px' }}>
        Reviews
      </div>
      <ReviewsDiv>
        {
          reviews.map((review) => {
            let reviewDiv = <div>{review.review}</div>

            if (review.review.length > 180) {
              reviewDiv = <div>
                <span>
                  {review.review.slice(0, 180)}...
                    </span>
                <ReadMoreButton onClick={handleReadMore}>
                  Read more
                    </ReadMoreButton>
              </div>
            }

            return (
              <ReviewEntry reviewDiv={reviewDiv} reviewRating={review.rating} />
            )
          })
        }
      </ReviewsDiv>
    </ReviewsComponent>
  );
}

export default Reviews;
