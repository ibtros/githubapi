import {
  AppBody,
  AppContainer,
  AppHeader,
} from './styles/AppStylesCss';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppNavbar } from './components/AppNavbar';
import {Home} from './pages/Home';
import { Repositories } from './pages/Repositories';
import { RepositoryPage } from './pages/RepositoryPage';
import { UserPage } from './pages/UserPage';
import { UserRepos } from './pages/UserRepos';
import { Users } from './pages/Users';

function App() {
  return (
    <Router>
      <AppContainer>
        <AppHeader>
          <AppNavbar />
        </AppHeader>
        <AppBody>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="user/:userLogin" element={<UserPage />}/>
            <Route path="/users/:userLogin/repos" element={<UserRepos />}/>
            <Route path="repos/:repositoryOwner/:repositoryName" element={<RepositoryPage />}/>
            <Route path="/repositories" element={<Repositories />} />
            <Route path="repos/:repositoryOwner/:repositoryName" element={<RepositoryPage />}/>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/"/>} />
          </Routes>
        </AppBody>
      </AppContainer>
    </Router>
  );
}

export default App;
