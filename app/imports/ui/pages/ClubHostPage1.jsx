import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../api/club/Club';
import LoadingSpinner from '../components/LoadingSpinner';

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

const ClubHostPage1 = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user()?.emails[0]?.address, // Get the email address of the current user
  }), []);

  const { clubs, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Clubs.adminPublicationName);
    const rdy = subscription.ready();
    const items = Clubs.collection.find({}).fetch();
    return {
      clubs: items,
      ready: rdy,
    };
  });

  // Extract emails from clubs
  // const clubEmails = clubs.map(club => club.email);

  // Check if the email of the currently logged-in user is in clubEmails
  const userClub = clubs.find(club => club.email === currentUser);

  return ready ? (
    <div style={frameStyle}>
      <Container fluid style={containerStyle}>
        {userClub ? (
          <Container fluid className="text-center">
            <Row>
              <Col className="text-center" style={{ border: '1px solid black' }}>
                {/* Display other club information here */}
                <Image src={defaultClubImage} roundedCircle className="m-3" style={{ width: '450px', objectFit: 'fill' }} alt="clubImg" />
                <p>Club Name: {userClub.organization}</p>
              </Col>
              <Col className="text-center" style={{ border: '1px solid black' }}>
                <p>Purpose: {userClub.purpose}</p>
                <p>Club Type: {userClub.type}</p>
                <p>Club Approval Date: {userClub.dateApproved}</p>
                <p>Club Renewal Date: {userClub.expiration}</p>
                <p>Email: {userClub.email}</p>
              </Col>
            </Row>
          </Container>
        ) : (
          <Col xs={7} className="text-center">
            <h1>This is not the club you are looking for...</h1>
          </Col>
        )}
      </Container>
    </div>
  ) : <LoadingSpinner />;
};

export default ClubHostPage1;
