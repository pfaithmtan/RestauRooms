import React from 'react';
import { ReviewsDiv } from '../styling/style.jsx'

const Reviews = (props) => {
    console.log('REVIEWS PROPS:', props);

    return (
        <ReviewsDiv>
            <h2>Bathroom Reviews</h2>
            {
                props.toiletReviews.map(review => <div>
                    <div>{review.review}</div>
                    <div>{review.rating}</div>
                </div>)
            }
            <form >
                <label>
                    Add a review!
              <input name="review" value='some review' />
                </label>
                <input type="submit" value="Add" />
            </form>
        </ReviewsDiv>
    );

}

export default Reviews;
