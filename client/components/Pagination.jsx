import React from 'react';

import {
  PaginationDiv,
  Numbers,
} from '../styling/style.jsx';

const Pagination = ({ reviewsPerPage, totalReviews, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return  (
    <PaginationDiv>
      {
        pageNumbers.map((number) => (
          <Numbers>
            <a onClick={() => paginate(number)}>{number}</a>
          </Numbers>
        ))
      }
    </PaginationDiv>
  );
}

export default Pagination;
