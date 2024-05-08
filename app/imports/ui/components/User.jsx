import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Col, Row, Image } from 'react-bootstrap';
import UserProfileClubsCarousel from './UserProfileClubsCarousel';

const UserProfile = ({ user }) => (
  <Container fluid>
    <Row>
      <Col md={10} className="mx-auto">
        <Card id="Card-Profile">
          <Card.Body>
            {/* User details */}
            <Row className="justify-content-center">
              <Col className="justify-content-center text-center">
                <Image src={user.picture} width={200} />
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <p>First Name: {user.firstName}</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <p>Last Name: {user.lastName}</p>
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
