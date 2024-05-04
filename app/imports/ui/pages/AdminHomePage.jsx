// AdminHomePage.jsx

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Announcements from '../components/Announcements';
import Events from '../components/Events';
import Members from '../components/Members';

const AdminHomePage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Announcements');

  let mainContent;
  switch (selectedMenuItem) {
  case 'Announcements':
    mainContent = <Announcements />;
    break;
  case 'Events':
    mainContent = <Events />;
    break;
  case 'Members':
    mainContent = <Members />;
    break;
  default:
    mainContent = <Announcements />;
    break;
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <Sidebar onSelectMenuItem={setSelectedMenuItem} />
        </Col>
        <Col sm={9}>
          {mainContent}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHomePage;
