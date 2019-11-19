import React from 'react';

const Search = (props) => (
    <form >
        <label>
          Looking for a review?
          <input name="review" placeholder="Search within reviews"/>
        </label>
        <input type="submit" value="Search" />
      </form>
);

export default Search;
