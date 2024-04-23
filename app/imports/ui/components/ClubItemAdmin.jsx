import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

/** Renders a single row in the Club Collection. See pages/ListStuff.jsx. */
const ClubItem = ({ club }) => (
  <Card className="h-75 w-50">
    <Card.Header>
      <Card.Title>{club.organization}</Card.Title>
      <Card.Subtitle>{club.type}</Card.Subtitle>
      <Card.Subtitle>{club.dateApproved} - {club.expiration}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{club.purpose}</Card.Text>
    </Card.Body>
    <Card.Footer>{club.email}</Card.Footer>
  </Card>
);

// Require a document to be passed to this component.
ClubItem.propTypes = {
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

export default ClubItem;
