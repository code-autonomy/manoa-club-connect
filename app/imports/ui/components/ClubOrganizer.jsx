import React from 'react';
import PropTypes from 'prop-types';
import ClubCards from './ClubCards';

const ClubOrganizer = ({ clubs }) => {
  // Organize clubs by category
  const clubsByCategory = {};

  clubs.forEach((club) => {
    if (!clubsByCategory[club.type]) {
      clubsByCategory[club.type] = [];
    }
    clubsByCategory[club.type].push(club);
  });

  return (
    <div>
      {Object.keys(clubsByCategory).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ClubCards clubs={clubsByCategory[category]} />
        </div>
      ))}
    </div>
  );
};

// Define PropTypes
ClubOrganizer.propTypes = {
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

export default ClubOrganizer;
