import styled from 'styled-components';

export const RepositoryContainer = styled.div`
  border-style: inset;
  height: auto;
  margin-bottom: 6vh;
  margin-left: 10vh;
  margin-top: 4vh;
  text-align: center;
  width: 80%;

  @media (max-width: 560px) {
    margin-left: 5vh;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    margin-left: 4vh;
  }
`;

export const UserReposContainer = styled.div`
  width: 90%;
`;