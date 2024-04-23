import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class UsersCollection {
  constructor() {
    this.name = 'UsersCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      username: String,
      email: String,
      profilePicture: {
        type: String,
        optional: true, // Profile picture is optional
      },
      // Add other fields as needed
    });
    this.collection.attachSchema(this.schema);
    this.publicationName = `${this.name}.publication`;
  }
}
export const Users = new UsersCollection();
