import { UserAvatar, UserContainer } from '../styles/UserStylesCss';

import {Link} from 'react-router-dom';

export const UserCard = ({user}) => {
  return (
    <UserContainer>
      <UserAvatar src={user.avatar_url} alt={user.avatar_url}/>
      <h3>{user.login}</h3>
      <Link 
        to={`/user/${user.login}`}
      >
        See more...
      </Link>
    </UserContainer>
  )
}
