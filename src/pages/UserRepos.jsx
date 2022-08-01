import { useEffect, useState } from 'react';

import { RepositoryCard } from '../components/RepositoryCard';
import { Spinner } from '../components/Spinner';
import { UserCard } from '../components/UserCard';
import { UserReposContainer } from '../styles/RepositoryStylesCss';
import { getUserReposByLogin } from '../utils/api';
import { useParams } from 'react-router-dom';

export const UserRepos = () => {
  const {userLogin} = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    setIsloading(true);
    const searchUrl = `/users/${userLogin}/repos`;
    getUserReposByLogin(searchUrl).then((data) => {
      setUserRepos([...data]);
      setIsloading(false);
    });
  }, [userLogin]);

  return (
    <UserReposContainer>
      {
        isLoading
        ?
        <Spinner />
        :
        (
          userRepos.length === 0 ?
          <div className="alert alert-danger">No results found</div>
          :
          (
            <>
            <UserCard user={userRepos[0].owner} />
            {
              userRepos.map(userRepo => (
                <RepositoryCard key={userRepo.id} repository={userRepo}/>
              ))
            }
            </>  
          )       
        )
      }
    </UserReposContainer>
  )
}
