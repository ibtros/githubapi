import { ResultsContainer, SearchContainer, SearchFormContainer } from '../styles/SearchStylesCss';
import { getRepositoriesByName, getUsersByLogin } from '../utils/api';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { RepositoryCard } from './RepositoryCard';
import { Spinner } from './Spinner';
import { UserCard } from './UserCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = ({searchingBy}) => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const q = query.get("q");
  const [ values, handleInputChange ] = useForm( {searchText: q} );
  const {searchText} = values;
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsloading(true);
    // It is decided what data should be obtained according to the page that uses the component
    if (searchingBy === 'users') {
      const searchUrl = `/users`;
      getUsersByLogin(searchUrl, q).then((data) => {
        setData([...data]);
        setIsloading(false);
      });  
    } else if (searchingBy === 'repositories') {
      const searchUrl = `/repositories`;
      getRepositoriesByName(searchUrl, q).then((data) => {
        setData([...data]);
        setIsloading(false);
      });  
    }
  }, [q, searchingBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <SearchContainer>
          <SearchFormContainer>
            <h4>Search</h4>
            <hr/>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={'Search ' + searchingBy}
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText ? searchText : ''}
                onChange={handleInputChange}
              />
                <button type="submit" className="btn btn-outline-primary mt-2">Search</button>
            </form>
          </SearchFormContainer>
        <ResultsContainer>
          <h4>Results</h4>
          <hr/>
          {
            isLoading 
            ?
            <Spinner />
            :
            (
              (q === '' || !q) 
              ? 
              <div className="alert alert-info">{'Search ' + searchingBy}</div>
              : 
              (
                data.length === 0 
                ? 
                <div className="alert alert-danger">No results found: {q}</div>
                :
                (
                  searchingBy === 'users' 
                  ?
                  data.map(user => (
                    <UserCard key={user.id} user={user}/>
                  ))
                  :
                  data.map(repository => (
                    <RepositoryCard key={repository.id} repository={repository}/>
                  ))
                )
              )
            )
          }
        </ResultsContainer>
      </SearchContainer>
    </>
  )
}
