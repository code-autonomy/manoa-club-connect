import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const cardStyle = {
  border: '1px solid black',
};

const ClubCards = ({ clubs }) => (
  <div>
    {clubs.map((club) => (
      <ClubCard key={club._id} club={club} />
    ))}
  </div>
);

ClubCards.propTypes = {
  clubs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      dateApproved: PropTypes.string.isRequired,
      expiration: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const ClubCard = ({ club }) => {
  const { organization, dateApproved, expiration, type, email, purpose } = club;

  return (
    <Card style={cardStyle}>
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

export { ClubCards, ClubCard };
