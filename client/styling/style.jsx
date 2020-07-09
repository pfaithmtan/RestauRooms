import styled from 'styled-components';

export const Main = styled.div`
  background: #d6fff6;
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  background: #5ffcd7;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const SearchBar = styled.input`
  background-color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  margin: 10px 0 20px 0;
  padding: 0 11px 0 13px;
  text-overflow: ellipsis;
  width: 500px;
`;

export const ReviewsSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #22d8ae;
  width: 100%;
  margin: 10px;
  padding: 20px 10px 10px 10px;
`;

export const ReviewsComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ReviewsDiv = styled.div`
  background: white;
  margin: 20px 0 0 0;
`;

export const Review = styled.div`
  background: #def2ed;
  padding: 5px;
  margin: 10px;
`;

export const ReadMoreButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

export const PaginationDiv = styled.nav`
  display: flex;
  flex-direction: row;
  // background-color: red;
  margin: 15px 0 10px 0;
  // padding: 5px;
`;

export const Numbers = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  background-color: #375E54;
  color: white;

  &:hover {
    background-color: #A9DBFF;
    color: black;
  }
`;
