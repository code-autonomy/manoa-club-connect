import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class UsersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UsersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      email: { type: String, index: true, unique: true },
      firstName: { type: String, optional: true, defaultValue: 'First Name' },
      lastName: { type: String, optional: true, defaultValue: 'Last Name' },
      picture: { type: String, optional: true },
      interests: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'interests.$': {
        type: String,
        allowedValues: ['Academic/Professional', 'Political', 'Sports/Leisure', 'Religious/Spiritual', 'Service', 'Fraternity/Sorority', 'Ethnic/Cultural', 'Honorary Society', 'Leisure/Recreational', 'Other'],
      },
      clubNames: {
        type: Array,
        optional: true,
        defaultValue: [],
      },
      'clubNames.$': {
        type: String,
      },
    });
    // Ensure collection documents obey schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.superAdminPublicationName = `${this.name}.publication.superadmin`;
  }
}

export const Users = new UsersCollection();
