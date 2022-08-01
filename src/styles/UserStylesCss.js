import styled from 'styled-components';

export const UserContainer = styled.div`
  height: auto;
  text-align: center;
  margin-bottom: 6vh;
  margin-top: 4vh;
`;

export const UserAvatar = styled.img`
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
`;

export const UserRepoPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  height: 82vh;

  @media (max-width: 560px) {
    flex-direction: column;
    height: 90vh;
    width: auto;
    margin-top: 2vh;
    align-items: center;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    flex-direction: column;
    height: 84vh;
    width: auto;
    margin-top: 0;
    align-items: center;
  }
`;

export const UserPageAvatar = styled.img`
  height: 50vh;
  width: 50vh;
  border-radius: 10%;

  @media (max-width: 560px) {
    height: 25vh;
    width: 25vh;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    height: 30vh;
    width: 30vh;
  }
`;

export const UserRepoPageInfo = styled.div`
  width: 50%;

  @media (min-width: 561px) and (max-width: 820px) {
    width: 80%;
    font-size: 30px;
  }
`;
