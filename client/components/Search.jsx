import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            reviews: this.props.toiletReviews
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        const { value } = this.state;

        return (
            <form >
                <label>
                Looking for a review?
                <input type="text" value={value} placeholder="Search within reviews" onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Search" />
            </form>

        );
    }
}

export default Search;
