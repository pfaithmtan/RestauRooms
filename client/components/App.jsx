import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Main,
  Header,
  SearchAndReviewsDiv,
  SearchSide,
  ReviewsSide,
} from '../styling/style'
import Search from './Search'
import Reviews from './Reviews'

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

  useEffect(() => {
    getReviews('ChIJ6Z5t1n6AhYARaY_WxdP44r0');
  }, [])

  return (
    <Main>
      <Header>
        RestauRooms
      </Header>
      <SearchAndReviewsDiv>
        <SearchSide>
          <div style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
            Search for restaurant
          </div>
          <Search updateQuery={updateQuery} />
        </SearchSide>
        <ReviewsSide>
          <Reviews reviews={reviews} />
        </ReviewsSide>
      </SearchAndReviewsDiv>
    </Main>
  );
}

export default App;
