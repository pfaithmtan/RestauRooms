import React from 'react';
import { ReviewsDiv, OneReview } from '../styling/style.jsx'

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            review: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            review: event.target.value
        });
    }

    handleSubmit(event) {
        alert(`A review for ${this.props.name}'s restroom was submitted`);
        this.setState({
            review: ''
        })
        event.preventDefault();
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add a review!
                      <input type="text" value={review} onChange={this.handleChange} />
                    </label>
                    <p>Add a rating!</p>
                        <input type="radio" name="rating" value="1" />1
                        <input type="radio" name="rating" value="2" />2
                        <input type="radio" name="rating" value="3" />3
                        <input type="radio" name="rating" value="4" />4
                        <input type="radio" name="rating" value="5" />5
                    <input type="submit" value="Add" />
                </form>
            </ReviewsDiv>
                            );
                        }
                    }
                    
                    export default Reviews;
