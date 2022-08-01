import { SearchScreen } from '../components/Search';

export const Repositories = () => {
  return (
    <div>
      <h1>Repositories</h1>
      <br/>
      <SearchScreen searchingBy={'repositories'}></SearchScreen>
    </div>
  )
}
