import React from 'react';

import {
} from '../styling/style.jsx';

const Pagination = ({ reviewsPerPage, totalReviews }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return  (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {
        pageNumbers.map((number) => (
          <div>
            <a href='!#'>{number}</a>
          </div>
        ))
      }
    </nav>
  );
}

export default Pagination;
