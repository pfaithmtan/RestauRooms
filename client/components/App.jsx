import React, { useState } from 'react';
import axios from 'axios';

import {
  Main,
  Header,
  SearchAndReviewsDiv,
  SearchSide,
  ReviewsSide,
} from '../styling/style';
import Search from './Search';
import Reviews from './Reviews';
import Pagination from './Pagination';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [restaurantName, setRestaurantName] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(10);

  const getReviews = (placeId) => {
    axios.get(`/api/restaurant/${placeId}`)
      .then((data) => {
        setReviews(data.data[0].toiletReviews);
        setRestaurantName(data.data[0].name);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const updateQuery = (query) => {
    getReviews(query);
  }

  const indexOfLastPost = currentPage * reviewsPerPage;
  const indexOfFirstPost = indexOfLastPost - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost);

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
          <Reviews reviews={currentReviews} restaurantName={restaurantName} />
          {
            reviews.length === 0 ? <div /> : <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviews.length} />
          }
        </ReviewsSide>
      </SearchAndReviewsDiv>
    </Main>
  );
}

export default App;
