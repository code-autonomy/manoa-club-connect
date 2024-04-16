import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
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

const defaultClubImage = '/images/defaultClubImage.jpg'; // Default profile image URL

const ClubHostPage = ({ club }) => {
  const [editing, setEditing] = useState(false);
  const [newClub, setNewClub] = useState({ clubName: club.clubName, clubPicture: club.clubPicture, bio: club.bio });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Update the club with the new values
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClub({ ...newClub, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewClub({ ...newClub, clubPicture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={frameStyle}>
      <Container style={containerStyle}>
        <Row className="mt-3">
          <Col className="text-center">
            <Image roundedCircle src={newClub.clubPicture || defaultClubImage} style={{ width: '450px', objectFit: 'fill' }} alt="Club" />
            {editing ? (
              <input type="text" name="clubName" value={newClub.clubName} onChange={handleChange} />
            ) : (
              <h2 className="mt-3">{newClub.clubName}</h2>
            )}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            {editing ? (
              <textarea name="bio" value={newClub.bio} onChange={handleChange} />
            ) : (
              <p>{newClub.bio}</p>
            )}
          </Col>
        </Row>
        {editing && (
          <Row className="mt-4">
            <Col className="text-center">
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </Col>
          </Row>
        )}
        {editing && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="primary" onClick={handleSave}>Save</Button>
            </Col>
          </Row>
        )}
        {!editing && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="secondary" onClick={handleEdit}>Edit</Button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

// Apply PropTypes to the component
ClubHostPage.propTypes = {
  club: ClubsPropTypes.club,
};

// Provide defaultProps for the UserProfile component
ClubHostPage.defaultProps = {
  club: {
    clubName: 'Default Club name',
    clubPicture: defaultClubImage,
    bio: 'Default Bio',
  },
};
export default ClubHostPage;
