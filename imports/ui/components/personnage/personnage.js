import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Personnages } from '../../../api/personnage/personnage.js';

import './personnage.html';

Template.personnage.onCreated(function () {
    Meteor.subscribe('personnage');
})
Template.personnage.helpers
({
    personnage(){
        console.log(Personnages.find({}).fetch());
        return Personnages.find({});
    },
});