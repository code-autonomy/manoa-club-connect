import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import UserPropTypes from '../components/User'; // Correct import path

const defaultProfileImage = 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png'; // Default profile image URL

const UserProfile = ({ user }) => (
  <Container fluid>
    <Row className="mt-5">
      <Col xs={12} md={4} className="text-left">
        <div className="text-center">
          <Image src={user.profilePicture || defaultProfileImage} roundedCircle style={{ width: '150px', height: '150px' }} alt="Profile" />
        </div>
        <div className="text-center mt-3">
          <h2>{user.username}</h2>
          <p>{user.bio}</p>
        </div>
      </Col>
      <Col xs={12} md={8}>
        <div>
          <h3>Clubs</h3>
          <div className="d-flex justify-content-start">
            <Button variant="primary" style={{ fontSize: '20px', padding: '10px 20px' }} className="mx-3">Club 1</Button>
            <Button variant="warning" style={{ fontSize: '20px', padding: '10px 20px' }} className="mx-3">Club 2</Button>
            <Button variant="success" style={{ fontSize: '20px', padding: '10px 20px' }} className="mx-3">Club 3</Button>
            {/* Add more buttons with custom sizes as needed */}
          </div>
        </div>
      </Col>

    </Row>
  </Container>
);

// Apply PropTypes to the component
UserProfile.propTypes = {
  user: UserPropTypes.user,
};

// Provide defaultProps for the UserProfile component
UserProfile.defaultProps = {
  user: {
    username: 'Default Username',
    profilePicture: defaultProfileImage,
    bio: 'Default Bio',
  },
};
export default UserProfile;
