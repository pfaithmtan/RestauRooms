import React from 'react';
import { ReviewsDiv, OneReview } from '../styling/style.jsx'

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            review: '',
            rating1: false,
            rating2: false,
            rating3: false,
            rating4: false,
            rating5: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            review: event.target.value
        });
    }

    // handleClick(event) {
    //     event.preventDefault();
    //     console.log('The link was clicked.', event.target.name);
    //     this.setState({
    //         [event.target.name]: ![event.target.name]
    //     });
    //   }

    handleClick1(event) {
        event.preventDefault();
        this.setState({
            rating1: true,
            rating2: false,
            rating3: false,
            rating4: false,
            rating5: false,
        });
    }
    handleClick2(event) {
        event.preventDefault();
        this.setState({
            rating1: false,
            rating2: true,
            rating3: false,
            rating4: false,
            rating5: false,
        });
    }
    handleClick3(event) {
        event.preventDefault();
        this.setState({
            rating1: false,
            rating2: false,
            rating3: true,
            rating4: false,
            rating5: false,
        });
    }
    handleClick4(event) {
        event.preventDefault();
        this.setState({
            rating1: false,
            rating2: false,
            rating3: false,
            rating4: true,
            rating5: false,
        });
    }
    handleClick5(event) {
        event.preventDefault();
        this.setState({
            rating1: false,
            rating2: false,
            rating3: false,
            rating4: false,
            rating5: true,
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
        const { review, rating1, rating2, rating3, rating4, rating5 } = this.state;

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
                    <input type="radio" name="rating1" value="1" checked={rating1} onClick={this.handleClick1} />1
                        <input type="radio" name="rating2" value="2" checked={rating2} onClick={this.handleClick2} />2
                        <input type="radio" name="rating3" value="3" checked={rating3} onClick={this.handleClick3} />3
                        <input type="radio" name="rating4" value="4" checked={rating4} onClick={this.handleClick4} />4
                        <input type="radio" name="rating5" value="5" checked={rating5} onClick={this.handleClick5} />5
                    <input type="submit" value="Add" />
                </form>
            </ReviewsDiv>
        );
    }
}

export default Reviews;
