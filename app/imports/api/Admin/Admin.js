import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// Define a schema for announcements
const AnnouncementsSchema = new SimpleSchema({
  text: {
    type: String,
    label: 'Text',
  },
});

export const Announcements = new Mongo.Collection('announcements');
Announcements.attachSchema(AnnouncementsSchema);

// Define a schema for events
const EventsSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  date: {
    type: Date,
    label: 'Date',
  },
});

export const Events = new Mongo.Collection('events');
Events.attachSchema(EventsSchema);

// Define a schema for members
const MembersSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  email: {
    type: String,
    label: 'Email',
  },
});

export const Members = new Mongo.Collection('members');
Members.attachSchema(MembersSchema);
