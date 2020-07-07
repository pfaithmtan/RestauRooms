import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Main,
  Header,
  SearchAndReviewsDiv,
  SearchSide,
  ReviewsSide,
  Review,
} from '../styling/style'
import Search from './Search'

const App = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = (placeId) => {
    axios.get(`/api/restaurant/${placeId}`)
      .then((data) => {
        setReviews(data.data[0].toiletReviews);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const updateQuery = (query) => {
    getReviews(query);
  }

  return (
    <Main>
      <Header>
        RestauRooms
      </Header>
      <SearchAndReviewsDiv>
        <SearchSide>
          Search for restaurant
          <Search updateQuery={updateQuery} />
        </SearchSide>
        <ReviewsSide>
          Reviews
          {
            reviews.map((review) => (
              <Review>
                {
                  review.review
                }
                {
                  review.rating
                }
              </Review>
            ))
          }
        </ReviewsSide>
      </SearchAndReviewsDiv>
    </Main>
  );
}

export default App;
