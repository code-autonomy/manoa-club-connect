/// Sidebar.jsx

import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Sidebar = ({ onSelectMenuItem }) => {
  const handleMenuItemClick = (menuItem) => {
    onSelectMenuItem(menuItem);
  };

  return (
    <Nav className="flex-column">
      <Nav.Link onClick={() => handleMenuItemClick('Announcements')}>Announcements</Nav.Link>
      <Nav.Link onClick={() => handleMenuItemClick('Events')}>Events</Nav.Link>
      <Nav.Link onClick={() => handleMenuItemClick('Members')}>Members</Nav.Link>
    </Nav>
  );
};

Sidebar.propTypes = {
  onSelectMenuItem: PropTypes.func.isRequired,
};

export default Sidebar;
