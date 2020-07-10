import React from 'react';

import {
  ReviewsComponent,
  ReviewsDiv,
  ReviewsTitle,
} from '../styling/style.jsx';
import ReviewEntry from './ReviewEntry';
import ReviewForm from './ReviewForm';

const Reviews = ({ reviews, restaurantName, initialRestaurants, restaurantPlaceId }) => {
  let title = <ReviewsTitle>
    Search reviews from restaurants like...
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundImage: 'linear-gradient(to bottom right, grey, black, grey)',
        margin: '20px 5px 20px 5px',
      }}
    >
      {
        initialRestaurants.map((name, i) => {
          const colours = ['#FFEBA1', '#0CBDFF', '#FF9E67'];
          return (<div
            style={{
              color: (i % 3 === 0 ? colours[0] : (i % 2 === 0 ? colours[1] : colours[2])),
              fontSize: '45px',
              fontStyle: 'oblique',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {name}
          </div>)}
        )
      }
    </div>
    ...and many more!
    <div
      style={{
        marginTop: '50px',
      }}
    >
      Or write your own review!
    </div>
  </ReviewsTitle>;

  if (reviews.length) {
    title = <ReviewsTitle>
      {`Reviews for ${restaurantName}`}
      <ReviewForm restaurantPlaceId={restaurantPlaceId} />
    </ReviewsTitle>;
  } else if (restaurantName && !reviews.length) {
    title = <ReviewsTitle>
      {`Be the first to write a review for ${restaurantName}`}
      <ReviewForm restaurantPlaceId={restaurantPlaceId} />
    </ReviewsTitle>;
  }

  return (
    <ReviewsComponent>
      {title}
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
