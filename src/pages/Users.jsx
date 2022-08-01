import { SearchScreen } from '../components/Search';

export const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <br/>
      <SearchScreen searchingBy={'users'}></SearchScreen>
    </div>
  )
}
