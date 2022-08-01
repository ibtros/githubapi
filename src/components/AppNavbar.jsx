import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const AppNavbar = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">GitHub API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="users">Users</Nav.Link>
            <Nav.Link href="repositories">Repositories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
