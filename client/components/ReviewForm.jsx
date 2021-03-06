import React, { useState } from 'react';
import axios from 'axios';

import {
  ReviewFormDiv,
  ReviewTextBox,
  ReviewButtons,
  ReviewSubmit,
} from '../styling/style';

const ReviewForm = ({ restaurantPlaceId, getReviews }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleChange = (event) => {
    setReview(event.target.value)
  }

  const handleRating = (event) => {
    setRating(Number(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`/api/restaurant/${restaurantPlaceId}/review`, {
      rating,
      review,
    })
      .then((response) => {
        setReview('');
        setRating(1);
        getReviews(restaurantPlaceId);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ReviewFormDiv>
      <form onSubmit={(event) => handleSubmit(event)} >
        <label for="submit-review" style={{ fontSize: 20 }}>Submit a review</label><br/>
        <ReviewTextBox
          type="text"
          id="review"
          placeholder="Whether extraodinarily immacurate or absolutely filthy... Please, pray tell."
          value={review}
          onChange={handleChange}
          required={true}
        />
        <ReviewButtons>
          Give an overall rating:
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cleantoilet-4-1154430.png"
            alt="clean toilet rating"
            width="30"
            height="30"
            style={{ margin: '0 3px 0 5px' }}
          />
          <input type="radio" id="1" value="1" checked={rating === 1} onChange={handleRating} />
          <label for="1">1</label>
          <input type="radio" id="2" value="2" checked={rating === 2} onChange={handleRating} />
          <label for="2">2</label>
          <input type="radio" id="3" value="3" checked={rating === 3} onChange={handleRating} />
          <label for="3">3</label>
          <input type="radio" id="4" value="4" checked={rating === 4} onChange={handleRating} />
          <label for="4">4</label>
          <input type="radio" id="5" value="5" checked={rating === 5} onChange={handleRating} />
          <label for="5">5</label>
          <ReviewSubmit type="submit" value="Submit" />
        </ReviewButtons>
      </form>
    </ReviewFormDiv>
  );
}

export default ReviewForm;