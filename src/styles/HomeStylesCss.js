import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 84vh;
  text-align: center;
  width: 100%;

  @media (max-width: 560px) {
    height: auto;
  }
`;

export const WelcomeTitle = styled.h1`
  padding-bottom: 3vh;
  padding-top: 3vh;
`;

export const GitHubIcon = styled.img`
  height: 25vh;
  width: 25vh;
`;

export const Intro = styled.h3`
  margin-top: 3vh;

  @media (min-width: 561px) and (max-width: 820px) {
    margin-left: 3vh;
    margin-right: 3vh;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3vh;

  @media (max-width: 560px) {
    align-items: center;
    flex-direction: column;
    padding-bottom: 3vh;
    padding-top: 0;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    padding-top: 6vh;
  }
`;

export const Icon = styled.img`
  height: 30vh;
  margin-left: 8vh;
  margin-right: 8vh;
  width: 30vh;
  
  @media (max-width: 560px) {
    margin-left: 2vh;
    margin-right: 2vh;
  }

  @media (min-width: 561px) and (max-width: 820px) {
    margin-left: 2vh;
    margin-right: 2vh;
  }
`;
