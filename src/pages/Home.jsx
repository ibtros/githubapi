import { GitHubIcon, HomeContainer, Icon, IconsContainer, Intro, WelcomeTitle } from '../styles/HomeStylesCss';

import gitHubImage from '../iconmonstr-github-1.svg';
import repoImage from '../repo-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import usersImage from '../users-svgrepo-com.svg';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <WelcomeTitle>Welcome to GitHub API!</WelcomeTitle>
      <GitHubIcon 
        src={gitHubImage} 
        alt='gitHubIcon' 
      />
      <Intro>Find hundreds of git users and their repositories in the easiest way</Intro>
      <IconsContainer>
        <Icon 
          src={usersImage} 
          alt='usersIcon' 
          onClick={() => {
            navigate('/users');
          }}
        />
        <Icon 
          src={repoImage} 
          alt='repoIcon' 
          onClick={() => {
            navigate('/repositories');
          }}
        />
      </IconsContainer>
    </HomeContainer>
  )
}
