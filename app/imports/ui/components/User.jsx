import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Col, Row, Image } from 'react-bootstrap';
import UserProfileClubsCarousel from './UserProfileClubsCarousel';

const UserProfile = ({ user }) => (
  <Container fluid className="py-4">
    <Row className="justify-content-center">
      <Col md={8}>
        <Card id="Card-Profile" className="shadow-lg rounded">
          <Card.Body>
            <Row className="justify-content-center mb-4">
              <Col xs="auto">
                <Image src={user.picture} roundedCircle width={150} />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={12} className="text-center">
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.title}</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} className="text-center">
                <p><strong>Interests:</strong> {user.interests.join(', ')}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md={12}>
        <UserProfileClubsCarousel user={user} />
      </Col>
    </Row>
  </Container>
);

UserProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default UserProfile;
