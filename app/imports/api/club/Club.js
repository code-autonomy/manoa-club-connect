import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

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
      type: {
        type: String,
        allowedValues: ['Academic/Professional', 'Political', 'Sports/Leisure', 'Religious/Spiritual', 'Service', 'Fraternity/Sorority', 'Ethnic/Cultural', 'Honorary Society', 'Leisure/Recreational', 'Other'],
        defaultValue: 'Other',
      },
      email: String,
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

// Singleton instance of the ClubsCollection
export const Clubs = new ClubsCollection();
