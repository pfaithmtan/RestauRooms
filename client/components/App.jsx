import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Main,
  Header,
  SearchAndReviewsDiv,
  SearchSide,
  ReviewsSide,
  ReviewsDiv,
  Review,
  ReadMoreButton,
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
                      {review.review.slice(0,180)}...
                    </span>
                    <ReadMoreButton>
                      Read more
                    </ReadMoreButton>
                  </div>
                }

                return (
                  <Review>
                    {
                      reviewDiv
                    }
                    <br />
                    {'Overall rating:  '}
                    {[...Array(review.rating)].map(() =>
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cleantoilet-4-1154430.png"
                        alt="clean toilet rating"
                        width="20"
                        height="20"
                      />
                    )}
                  </Review>
                )
              })
            }
          </ReviewsDiv>
        </ReviewsSide>
      </SearchAndReviewsDiv>
    </Main>
  );
}

export default App;
