import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import About from '../about/about';
import News from '../news/news';
import GalleryNano from '../gallery/gallery-nano';

export default class Menu extends Component {
  render() {
    return(
      <Navbar collapseOnSelect className="navbar-custom">
        <Navbar.Header>
          <Navbar.Brand className="navbrand">
            <a className="navbrand-logo" href="http://blog.aquariuminfo.org/" target="_blank"><img className="img-responsive" src="../../../images/IMG_166598.jpg" /></a>
            <a className="navbrand-name" href="/">Aquarium Nerd</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>

            <li><Navbar.Link href="http://blog.aquariuminfo.org/" target="_blank">News</Navbar.Link></li>

            {/* <LinkContainer to="/news"><NavItem eventKey={2} href="#">News</NavItem></LinkContainer> */}
            {/*<NavDropdown eventKey={3} title="News" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>*/}

            <NavDropdown eventKey={3} title="Gallery" id="basic-nav-dropdown dropdown-menu">
              <LinkContainer to="/gallery-aqua"><MenuItem eventKey={3.1}>Aquarium</MenuItem></LinkContainer>
              <LinkContainer to="/gallery-nano"><MenuItem eventKey={3.1}>Nano Aquarium</MenuItem></LinkContainer>
            </NavDropdown>

            <LinkContainer to="/about">
              <NavItem eventKey={4} target="_blank">About & Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
