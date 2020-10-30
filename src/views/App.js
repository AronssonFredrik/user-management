
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Users from './users/users';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Fredev.UM</Navbar.Brand>
          <Link to="/users">
            Users
          </Link>
        </Navbar>
        <Container fluid="md">
          <Switch>
            <Route path="/" component={Users} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}
