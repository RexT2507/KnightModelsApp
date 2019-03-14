import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Personnages } from '../../../api/personnage';

import './personnages.html';

Template.personnages.onCreated(function () {
    Meteor.subscribe('personnages');
})
Template.personnages.helpers
({
    personnages(){
        console.log(Personnages.find({}).fetch());
        return Personnages.find({});
    },
});