// In a file located in the server directory, such as methods.js
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Users } from '../../api/Users/User';

Meteor.methods({
  'users.updateProfilePicture'(userId, profilePicture) {
    // Ensure the user is logged in before updating their profile picture
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You are not authorized to update the profile picture.');
    }

    // Check if the provided userId matches the logged-in user's userId
    if (this.userId !== userId) {
      throw new Meteor.Error('invalid-user', 'You are not allowed to update another user\'s profile picture.');
    }

    // Update the user's profile picture in the database
    Meteor.users.update(userId, {
      $set: { profilePicture },
    });
  },
});
