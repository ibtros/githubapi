import {Link} from 'react-router-dom';
import { RepositoryContainer } from '../styles/RepositoryStylesCss';

export const RepositoryCard = ({repository}) => {
  return (
    <RepositoryContainer>
      <h1>Repo: {repository.name}</h1>
      <h2>{repository.description}</h2>
      <h3>Owner: {repository.owner.login}</h3>
      <Link 
        to={`/repos/${repository.owner.login}/${repository.name}`}
      >
        See more...
      </Link>
    </RepositoryContainer>
  )
}
