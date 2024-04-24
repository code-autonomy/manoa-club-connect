import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Club';

// eslint-disable-next-line react/prop-types
const ClubCards = ({ clubs }) => (
  <div>
    {/* eslint-disable-next-line react/prop-types */}
    {clubs.map((club) => (
      <ClubCard key={club._id} club={club} />
    ))}
  </div>
);

const ClubCard = ({ club }) => {
  const { organization, dateApproved, expiration, type, email, purpose } = club;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{organization}</Card.Title>
        <Card.Text>Date Approved: {dateApproved}</Card.Text>
        <Card.Text>Expiration: {expiration}</Card.Text>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>Email: {email}</Card.Text>
        <Card.Text>Purpose: {purpose}</Card.Text>
      </Card.Body>
    </Card>
  );
};

ClubCard.propTypes = {
  club: PropTypes.shape({
    organization: PropTypes.string,
    dateApproved: PropTypes.string,
    expiration: PropTypes.string,
    type: PropTypes.string,
    email: PropTypes.string,
    purpose: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

// Fetch clubs data from the database
const ClubCardsContainer = withTracker(() => {
  Meteor.subscribe('clubs'); // Assuming you have a publication named 'clubs'

  return {
    clubs: Clubs.collection.find().fetch(),
  };
})(ClubCards);

export default ClubCardsContainer;
