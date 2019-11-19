import React from 'react';

const Reviews = (props) => (
    <div>
        <h2>Bathroom Reviews</h2>
        {
            props.toiletReviews.map(review => <div>
                <div>{review.review}</div>
                <div>{review.rating}</div>
            </div>)
        }
    </div>
);

export default Reviews;
