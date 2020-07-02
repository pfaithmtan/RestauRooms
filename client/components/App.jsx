import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import Search from './Search.jsx';
// import Reviews from './Reviews.jsx';
import {
  Main,
  Header,
  SearchAndReviewsDiv,
  SearchSide,
  ReviewsSide,
} from '../styling/style'

const App = () => {
  return (
    <Main>
      <Header>
        RestauRooms
      </Header>
      <SearchAndReviewsDiv>
        <SearchSide>
          Search for restaurant
        </SearchSide>
        <ReviewsSide>
          Reviews
        </ReviewsSide>
      </SearchAndReviewsDiv>
    </Main>
  );
}

export default App;
