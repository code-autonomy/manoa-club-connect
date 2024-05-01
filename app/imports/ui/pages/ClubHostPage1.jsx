import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../api/club/Club';

const ClubHostPage1 = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(), // Get the email address of the current user
  }), []);

  const club = Clubs.collection.findOne({ email: currentUser });

  return (
    <Container fluid>
      <Row className="justify-content-center m-5">
        {club ? ( // Check if club is found based on the currentUser's email
          <Col>
            <p>Club Name: {club.organization}</p>
            <p>Club Type: {club.type}</p>
            {/* Display other club information here */}
          </Col>
        ) : (
          <Col xs={7} className="text-center">
            <h1>This is not the club you are looking for...</h1>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ClubHostPage1;
