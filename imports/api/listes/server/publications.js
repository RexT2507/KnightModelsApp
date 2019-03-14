import { Meteor } from 'meteor/meteor';

// Import de la collection Listes
import '../listes.js';

// Publish de la collection Listes
Meteor.publish('listes', function () {
    return Listes.find({});
});