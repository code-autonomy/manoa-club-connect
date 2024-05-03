import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../api/club/Club';
import LoadingSpinner from '../components/LoadingSpinner';

const frameStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh', // Set height to 100% of viewport height
  backgroundColor: 'darkgreen',
  opacity: '50',
};

const mainCol = {
  justifyContent: 'left',
  height: '75vh',
};

const sideInfo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '75vh',
};

const containerStyle = {
  border: '2px solid #ccc', // Add border around the container
  borderRadius: '10px', // Add border-radius for rounded corners
  margin: '10px',
  backgroundColor: 'white',
};

const cardInfo = {
  width: '100%',
  height: '100%',
  boxShadow: '2px 5px 5px black',
  top: '10%',
  backgroundColor: 'whitesmoke',
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
              <Col className="text-center mt-5" style={mainCol}>
                {/* Display other club information here */}
                <Image src={defaultClubImage} roundedCircle className="m-3" style={{ width: '250px', objectFit: 'fill' }} alt="clubImg" />
                <h3 className="mb-5"><strong>{userClub.organization}</strong></h3>
                <h5 className="m-4">Club Approval Date: {userClub.dateApproved}</h5>
                <h5 className="m-4">Club Renewal Date: {userClub.expiration}</h5>
                <h5 className="m-4">Contact Email: {userClub.email}</h5>
              </Col>
              <Col className="mt-3" style={sideInfo}>
                <Card style={cardInfo}>
                  <Card.Body>
                    <Card.Text className="m-3"><strong>What Kind of Club Is This?</strong></Card.Text>
                    <Card.Footer style={{ backgroundColor: 'white' }}>{userClub.type}</Card.Footer>
                    <Card.Text className="m-3"><strong>Club Purpose</strong></Card.Text>
                    <Card.Footer style={{ backgroundColor: 'white' }}>{userClub.purpose}</Card.Footer>
                  </Card.Body>
                </Card>
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
