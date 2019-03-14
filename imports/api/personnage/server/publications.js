import { Meteor } from 'meteor/meteor';

// Import de la collection Personnages
import { Personnages } from '../personnage.js';

// Publish de la collection Personnages
Meteor.publish('personnages', function () {
    return Personnages.find({});
});