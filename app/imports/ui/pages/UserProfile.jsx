import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import UserPropTypes from '../components/User'; // Correct import path

const frameStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Set height to 100% of viewport height
};

const containerStyle = {
  border: '2px solid #ccc', // Add border around the container
  padding: '200px',
  borderRadius: '10px', // Add border-radius for rounded corners
};

const defaultProfileImage = 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png'; // Default profile image URL

const UserProfile = ({ user }) => (
  <div style={frameStyle}> {/* Apply inline style for framing */}
    <Container style={containerStyle}>
      <Row className="mt-5">
        <Col className="text-center">
          <Image src={user.profilePicture || defaultProfileImage} roundedCircle style={{ width: '150px', height: '150px' }} alt="Profile" />
          <h2 className="mt-3">{user.username}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <p>{user.bio}</p>
        </Col>
      </Row>
    </Container>
  </div>
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
