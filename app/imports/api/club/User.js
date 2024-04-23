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
      username: String,
      email: String,
      profilePicture: {
        type: String,
        optional: true,
      },
      // Add other fields as needed
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

// Singleton instance of the UsersCollection
export const Users = new UsersCollection();
