import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Menu extends Component {
  render() {
    return(
      <Navbar collapseOnSelect className="navbar-custom">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Aquarium</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={3} href="#">News</NavItem>
            {/*<NavDropdown eventKey={3} title="News" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>*/}
            <NavDropdown eventKey={4} title="Gallery" id="basic-nav-dropdown dropdown-menu">
              <MenuItem eventKey={4.1}>Aquarium</MenuItem>
              <MenuItem eventKey={4.1}>Nano Aquarium</MenuItem>
            </NavDropdown>
            <NavItem eventKey={5} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
