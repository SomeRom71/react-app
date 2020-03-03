import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Todo from './pages/todo';
import Weather from './pages/weather';
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">My react app</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">Weather</NavLink>
            <NavLink className="nav-link" to="/todo" exact >Todo</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path={'/'} exact component={Weather} />
        <Route path={'/todo'} component={Todo} />
      </Switch>
    </>
  );
}

export default App;
