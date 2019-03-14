// Definition of the personnage collection
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Personnages = new Mongo.Collection('personnages');

if (Meteor.isServer) {
    Meteor.publish('personnages', function personnagesPublication() {
        return Personnages.find();
    });
}
