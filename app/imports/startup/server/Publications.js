import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/Club';
import { Users } from '../../api/Users/User';
// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Clubs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Clubs.collection.find({
      owner: username,
    });
  }
  return this.ready();
});

Meteor.publish(null, function () {
  if (!this.userId) return this.ready();
  return Meteor.users.find(this.userId, {
    fields: {
      username: 1,
      'profile.firstName': 1,
      'profile.lastName': 1,
      'profile.title': 1,
      'profile.picture': 1,
    },
  });
});

/*  Meteor.publish(Users.userPublicationName, function () {
    if (this.userId) {
      return Meteor.users.find(this.userId, {
        fields: {
          username: 1,
          title: 1  // Make sure to publish the title field
        }
      });
    }
    return this.ready();
  }); */

Meteor.publish(Users.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Users.collection.find({ email: username });
  }
  return this.ready();
});

Meteor.publish(Users.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Users.collection.find();
  }
  return this.ready();
});
// Admin-level publication.
// If logged in and with admin role, then publish all documents from club. Otherwise, publish nothing.
Meteor.publish(Clubs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Clubs.collection.find();
  }
  return this.ready();
});

// SuperAdmin-level publication.
// If logged in and with superadmin role, then publish all documents from all clubs. Otherwise, publish nothing.
Meteor.publish(Clubs.superAdminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'superadmin')) {
    return Clubs.collection.find();
  }
  return this.ready();
});

Meteor.publish('clubs', function () {
  // Return data from the Clubs collection
  return Clubs.collection.find();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
