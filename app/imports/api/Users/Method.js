import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.updateProfilePicture'(profilePicture) {
    check(profilePicture, String); // Validate the profilePicture argument

    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You are not authorized to perform this action.');
    }

    try {
      Meteor.users.update(this.userId, { $set: { 'profile.profilePicture': profilePicture } });
    } catch (error) {
      throw new Meteor.Error('update-failed', 'Failed to update profile picture.');
    }
  },
});
