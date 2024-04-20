import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown, Col } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  const linkStyle = { color: 'white' };

  return (
    <Navbar bg="light" expand="lg" style={{ justifyContent: 'center' }}>
      <Container>
        <Col xs={2}>
          <Navbar.Brand as={NavLink} to="/" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img
              src="https://github.com/code-autonomy/manoa-club-connect/blob/main/app/public/images/club-connect-logo.png?raw=true"
              alt="Club Connect Logo"
              style={{ height: '80px', width: 'auto' }}
            />
          </Navbar.Brand>
        </Col>
        <Col xs={2} />
        <Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-end">
              {currentUser && (
                <>
                  <Nav.Link id="user-profile-nav" as={NavLink} to="/UserProfile" key="UserProfile" style={linkStyle} className="me-2">User Profile</Nav.Link>
                  <Nav.Link id="user-home-nav" as={NavLink} to="/UserHomePage" key="UserHomePage" style={linkStyle} className="me-2">Home</Nav.Link>
                  <Nav.Link id="clubs-nav" as={NavLink} to="/ClubCategoriesPage" style={linkStyle} className="me-2">Explore Clubs</Nav.Link>
                </>
              )}
              {Roles.userIsInRole(Meteor.userId(), 'admin') && (
                <Nav.Link id="club-profile-nav" as={NavLink} to="/ClubHostPage" style={linkStyle} className="me-2">Club Host Page</Nav.Link>
              )}
              {Roles.userIsInRole(Meteor.userId(), 'superadmin') && (
                <Nav.Link id="list-stuff-admin-nav" as={NavLink} to="/admin" style={linkStyle}>Admin</Nav.Link>
              )}
            </Nav>
            <Nav className="justify-content-end">
              {currentUser === '' ? (
                <NavDropdown id="login-dropdown" title="Login" style={{ color: 'white' }}>
                  <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                    <PersonFill /> Sign in
                  </NavDropdown.Item>
                  <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                    <PersonPlusFill /> Sign up
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown id="navbar-current-user" title={currentUser}>
                  <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                    <BoxArrowRight /> Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBar;
