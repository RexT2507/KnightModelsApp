import { Meteor } from 'meteor/meteor';

// Import de la collection Gangs
import { Gangs } from "../gangs";

// Publish de la collection Gangs
Meteor.publish('gangs', function () {
    return Gangs.find({});
});