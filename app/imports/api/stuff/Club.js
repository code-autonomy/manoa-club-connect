import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ClubsCollection. It encapsulates state and variable values for clubs.
 */
class ClubsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ClubsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      organization: String,
      dateApproved: String,
      expiration: String,
      clubType: {
        type: String,
        allowedValues: ['Sports', 'Arts & Crafts', 'Academic', 'Social', 'Service', 'Other'],
        defaultValue: 'Other',
      },
      clubEmail: String,
      purpose: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.superAdminPublicationName = `${this.name}.publication.superadmin`;
  }
}

/**
 * The singleton instance of the ClubsCollection.
 * @type {ClubsCollection}
 */
export const Clubs = new ClubsCollection();
