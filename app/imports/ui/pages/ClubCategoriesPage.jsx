import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types'; // Import PropTypes
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../api/club/Club';
import ClubOrganizer from '../components/ClubOrganizer';

const ClubsPage = ({ clubs }) => (
  <div>
    <h1>All Clubs</h1>
    <ClubOrganizer clubs={clubs} />
  </div>
);

// Define PropTypes for ClubsPage component
ClubsPage.propTypes = {
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

// Fetch clubs data from the database
const ClubsCategoriesPage = withTracker(() => {
  Meteor.subscribe('clubs'); // Subscribe to the 'clubs' publication

  return {
    clubs: Clubs.collection.find().fetch(),
  };
})(ClubsPage);

export default ClubsCategoriesPage;
