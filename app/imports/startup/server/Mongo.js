import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Club.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addClub = (club) => {
  console.log(`  Adding: ${club.organization}`);
  Clubs.collection.insert(club);
};

// Initialize the StuffsCollection if empty.
if (Clubs.collection.find().count() === 0) {
  if (Meteor.settings.defaultClub) {
    console.log('Creating default Club.');
    Meteor.settings.defaultClub.forEach(club => addClub(club));
  }
}
