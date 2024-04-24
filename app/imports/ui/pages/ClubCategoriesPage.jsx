import { Meteor } from 'meteor/meteor';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../api/club/Club';
import ClubOrganizer from '../components/ClubOrganizer';

// eslint-disable-next-line react/prop-types
const ClubsPage = ({ clubs }) => (
  <div>
    <h1>All Clubs</h1>
    <ClubOrganizer clubs={clubs} />
  </div>
);

// Fetch clubs data from the database
const ClubsCategoriesPage = withTracker(() => {
  Meteor.subscribe('clubs'); // Assuming you have a publication named 'clubs'

  return {
    clubs: Clubs.collection.find().fetch(),
  };
})(ClubsPage);

export default ClubsCategoriesPage;
