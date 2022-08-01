import { Navigate, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { UserPageAvatar, UserRepoPageContainer, UserRepoPageInfo } from '../styles/UserStylesCss';

import { Spinner } from '../components/Spinner';
import { getRepositoryByName } from '../utils/api';

export const RepositoryPage = () => {
  const {repositoryName, repositoryOwner} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    setIsloading(true);
    const searchUrl = `/repos/${repositoryOwner}/${repositoryName}`;
    getRepositoryByName(searchUrl).then((data) => {
      setRepository({...data});
      setIsloading(false);
    });
  }, [repositoryName, repositoryOwner]);

  if (!repository) {
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
            src={repository.owner.avatar_url} 
            alt={repository.owner.avatar_url}
            className="img-thumbnail animate__animated animate__fadeInLeft" 
          />
        <UserRepoPageInfo>
          <b>Owner: </b> {repository.owner.login}
          <ul className="list-group list-group list-group-flush">
            <li className="list-group-item">
              <b>Repo: </b> {repository.name}
            </li>
            <li className="list-group-item">
              <b>Description: </b> {repository.description}
            </li>
          </ul>
          <a href={repository.html_url}>HTML</a>
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
