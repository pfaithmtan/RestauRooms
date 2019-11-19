import React from 'react';
import { ReviewsDiv, OneReview } from '../styling/style.jsx'

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            review: ''
        };
    }

    render() {
        const { review } = this.state;

        return (
            <ReviewsDiv>
                <h2 style={{ textAlign: "center" }}>Bathroom Reviews</h2>
                {
                    this.props.toiletReviews.map(review => <OneReview>
                        <div>{review.review}</div>
                        <div>{review.rating}</div>
                    </OneReview>)
                }
                <form >
                    <label>
                        Add a review!
                      <input name="review" value={review} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </ReviewsDiv>
        );
    }
}

export default Reviews;
