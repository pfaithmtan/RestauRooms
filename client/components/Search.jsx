import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            toiletReviews: []
        };
    }

    render() {
        return (
            <form >
                <label>
                Looking for a review?
                <input name="review" placeholder="Search within reviews"/>
                </label>
                <input type="submit" value="Search" />
            </form>

        );
    }
}

export default Search;
