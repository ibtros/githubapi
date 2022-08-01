import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppBody = styled.div`
  background-color: white;
`;

export const AppHeader = styled.header`
  background-color: #f8f9fa;
  height: 11vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-right: 6vh;

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 4px;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    padding-right: 3vh;
  }
`;
