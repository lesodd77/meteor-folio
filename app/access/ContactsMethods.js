import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import {ContactsCollection} from "./ContactsCollection";

Meteor.methods({
  'contacts.insert'({ name, email, subject, message }) {
    check(name, String);
    check(email, String);
    check(subject, String);
    check(message, String);
    if(!name) {
      throw new Meteor.Error("Name is required.");
    }
    return ContactsCollection.insert({ name, email, subject, message, createdAt: new Date() });
  },
  'contacts.archive'({ contactId }) {
    check(contactId, String);
    ContactsCollection.update({ _id: contactId }, { $set: { archived: true } });
  }
})