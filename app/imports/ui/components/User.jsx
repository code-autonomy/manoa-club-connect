import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Col, Row, Image } from 'react-bootstrap';

const UserProfile = ({ user }) => (
  <Container id="Container-User-Profile" fluid className="h-75">
    <Row className="h-100">
      <Col md={10} className="h-100"> {/* Adjust the md value as per your layout requirement */}
        <Card id="Card-Profile" className="h-100 w-100">
          <Card.Body>
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
            <Row className="text-center">
              <Col>
                {user.interests && user.interests.length > 0 ? (
                  <p>Interests: {user.interests.join(', ')}</p>
                ) : (
                  <p>No interests specified</p>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

UserProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
    email: PropTypes.string,
    _id: PropTypes.string,
    interests: PropTypes.arrayOf(PropTypes.string), // Added interests PropTypes
  }).isRequired,
};

export default UserProfile;
