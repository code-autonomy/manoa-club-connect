import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Club.js';
import { Users } from '../../api/Users/User';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addClub = (club) => {
  console.log(`  Adding: ${club.organization}`);
  Clubs.collection.insert(club);
};

// Initialize the ClubsCollection if empty.
if (Clubs.collection.find().count() === 0) {
  if (Meteor.settings.defaultClub) {
    console.log('Creating default Club.');
    Meteor.settings.defaultClub.forEach(club => addClub(club));
  }
}

const addUser = (user) => {
  console.log(`  Adding: ${user.email} (${user.owner})`);
  Users.collection.insert(user);
};

if (Users.collection.find().count() === 0) {
  if (Meteor.settings.defaultUsers) {
    console.log('Creating default data.');
    Meteor.settings.defaultUsers.forEach(user => addUser(user));
  }
}
