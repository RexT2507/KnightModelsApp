import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Personnages } from '../../../api/personnage/personnage.js';

import './personnages.html';
import '../personnage/personnage.js';

Template.personnages.onCreated(function () {
    Meteor.subscribe('personnages');
});
Template.personnages.helpers
({
    personnages(){
        console.log(Personnages.find({}).fetch());
        return Personnages.find({});
    },
});