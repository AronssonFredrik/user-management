
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Users from './users/users';
export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Fredev.UM</Navbar.Brand>
          <Nav.Link href="#users">Users</Nav.Link>
        </Navbar>

        <Container fluid="md">
          <Users />
        </Container>
      </>
    );
  }
}
