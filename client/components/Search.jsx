import React from 'react';

const Search = (props) => (
    <form >
        <label>
          Looking for a review?
          <input name="review" value='heyhey'/>
        </label>
        <input type="submit" value="Search for a review!" />
      </form>
);

export default Search;
