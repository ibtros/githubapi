import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2vh;
  width: 90%;
  margin-left: 6vh;

  @media (max-width: 560px) {
    align-items: center;
    flex-direction: column;
    padding-bottom: 3vh;
    padding-top: 0;
    margin-left: 2vh;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    padding-top: 6vh;
  }
`;

export const SearchFormContainer = styled.div`
  width: 30%;

  @media (max-width: 560px) {
    width: 80%;
  }
`;


export const ResultsContainer = styled.div`
  width: 70%;

  @media (max-width: 560px) {
    margin-top: 4vh;
    width: 90%;
  }
`;
