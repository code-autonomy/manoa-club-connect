import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ClubsPropTypes from '../components/Clubs'; // Correct import path

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

const defaultClubImage = 'app/public/images/defaultClubImage.jpg'; // Default profile image URL

const ClubHostPage = ({ club }) => (
  <div style={frameStyle}> {/* Apply inline style for framing */}
    <Container style={containerStyle}>
      <Row className="mt-5">
        <Col className="text-center">
          <Image src={{ defaultClubImage }} roundedCircle style={{ width: '150px', height: '150px' }} alt="Club" />
          <h2 className="mt-3">{club.username}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <p>{club.bio}</p>
        </Col>
      </Row>
    </Container>
  </div>
);

// Apply PropTypes to the component
ClubHostPage.propTypes = {
  club: ClubsPropTypes.club,
};

// Provide defaultProps for the UserProfile component
ClubHostPage.defaultProps = {
  club: {
    clubname: 'Default Club name',
    clubPicture: defaultClubImage,
    bio: 'Default Bio',
  },
};
export default ClubHostPage;
