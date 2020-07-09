import React from 'react';
import styled, { css } from 'styled-components';

import {
  PaginationDiv,
} from '../styling/style.jsx';

const Numbers = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  background-color: #375E54;
  color: #dddddd;
  :hover {
    background-color: #A9DBFF;
    color: black;
    font-weight: 900;
  }
  
  ${(props) => (props.clickedPage)
    && css`
    background-color: #03A0DA;
    pointer-events: none;
    font-weight: 900;
    color: white;
  `}
`;

const Pagination = ({ reviewsPerPage, totalReviews, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationDiv>
      {
        pageNumbers.map((number) => (
          <Numbers clickedPage={number === currentPage} >
            <a onClick={() => paginate(number)}>{number}</a>
          </Numbers>
        ))
      }
    </PaginationDiv>
  );
}

export default Pagination;
