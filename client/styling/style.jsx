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

export const ReviewsTitle = styled.div`
  color: #163f34;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const ReviewsDiv = styled.div`
  background: white;
  margin: 20px 0 0 0;
  width: 672px;
`;

export const ReviewFormDiv = styled.div`
  disapy: flex;
  flex-direction: row;
  margin: 20px;
  color: white;
`;

export const ReviewTextBox = styled.textarea`
  resize: none;
  height: 100px;
  width: 500px;
  font-family: Roboto;
  font-size: 14px;
`;

export const ReviewButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: black;
`;

export const ReviewSubmit = styled.input`
  margin-left: 10px;
  background-color: #FFEBA1;
  color: black;
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
  margin: 15px 0 10px 0;
`;
