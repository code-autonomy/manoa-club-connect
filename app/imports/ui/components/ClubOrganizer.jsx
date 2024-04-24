import React from 'react';
import ClubCards from './ClubCards';

// eslint-disable-next-line react/prop-types
const ClubOrganizer = ({ clubs }) => {
  // Organize clubs by category
  const clubsByCategory = {};

  // eslint-disable-next-line react/prop-types
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

export default ClubOrganizer;
