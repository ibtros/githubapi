import { Navigate, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { UserPageAvatar, UserRepoPageContainer, UserRepoPageInfo } from '../styles/UserStylesCss';

import {Link} from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { getUserByLogin } from '../utils/api';

export const UserPage = () => {
  const {userLogin} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setIsloading(true);
    const searchUrl = `/users/${userLogin}`;
    getUserByLogin(searchUrl).then((data) => {
      setUser({...data});
      setIsloading(false);
    });
  }, [userLogin]);

  if (!user) {
    return <Navigate to='/'/>
  };

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      {
        isLoading 
        ?
        <Spinner />
        :
        <UserRepoPageContainer>
          <UserPageAvatar 
            src={user.avatar_url} 
            alt={user.avatar_url}
            className="img-thumbnail animate__animated animate__fadeInLeft" 
          />
          <UserRepoPageInfo>
            <h3>{user.name}</h3>
            <ul className="list-group list-group list-group-flush">
              <li className="list-group-item">
                <b>Username: </b> {user.login} <b>Bio: </b> {user.bio}
              </li>
              <li className="list-group-item">
                <b>{user.followers}</b> followers · <b>{user.following}</b> following
              </li>
            </ul>
            <p><b>Blog: </b> {user.blog}</p>
            <p><b>{user.public_repos}</b> Public Repos</p>
            <Link 
              to={`/users/${user.login}/repos`}
            >
              See repos...
            </Link>
            <br />
            <br />
            <button
              className="btn btn-outline-info"
              onClick={handleReturn}
            >
              Return
            </button>
          </UserRepoPageInfo>
        </UserRepoPageContainer>
      }
    </>
  )
}
