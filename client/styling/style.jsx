import styled from 'styled-components';

export const Main = styled.div`
  background: #d6fff6;
  display: flex;
  flex-direction: column;
  height: 665px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.div`
  background: linear-gradient(rgba(8,51,41,0), rgba(8,51,41,1)); //#083329;
  display: flex;
  justify-content: center;
  margin: 5px;
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
  color: white; //#1c5b4d;
`;

export const SearchAndReviewsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SearchSide = styled.div`
  background: #5ffcd7;
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const ReviewsSide = styled.div`
  background: #22d8ae;
  width: 100%;
  margin: 10px;
`;
