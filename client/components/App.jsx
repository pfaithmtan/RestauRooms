import React, { useState, useEffect } from 'react';
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
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantPlaceId, setRestaurantPlaceId] = useState('');
  const [initialRestaurants, setInitialRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(10);

  const getReviews = (placeId) => {
    axios.get(`/api/restaurant/${placeId}`)
      .then((data) => {
        setReviews(data.data[0].toiletReviews.reverse());
        setRestaurantName(data.data[0].name);
        setRestaurantPlaceId(placeId);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const updateQuery = (query) => {
    getReviews(query);
    setCurrentPage(1);
  }

  const getInitialRestaurants = () => {
    axios.get('/api/restaurants')
      .then((data) => {
        const restaurants = data.data;
        const restaurantNames = restaurants.map((restaurant) => (restaurant.name));

        setInitialRestaurants(restaurantNames)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    getInitialRestaurants();
  }, []);

  const indexOfLastPost = currentPage * reviewsPerPage;
  const indexOfFirstPost = indexOfLastPost - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
          <Reviews
            reviews={currentReviews}
            restaurantName={restaurantName}
            initialRestaurants={initialRestaurants}
            restaurantPlaceId={restaurantPlaceId}
            getReviews={getReviews}
          />
          {
            reviews.length === 0 
            ? <div /> : <Pagination 
              reviewsPerPage={reviewsPerPage} 
              totalReviews={reviews.length} 
              paginate={paginate} 
              currentPage={currentPage} />
          }
        </ReviewsSide>
      </SearchAndReviewsDiv>
    </Main>
  );
}

export default App;
