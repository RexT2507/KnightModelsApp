import { Meteor } from 'meteor/meteor';

// Import de la collection Gangs
import '../gangs.js';

// Publish de la collection Gangs
Meteor.publish('gangs', function () {
    return Gangs.find({});
});