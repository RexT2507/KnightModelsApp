import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import './personnage.html';
import {Personnages} from "../../../api/personnage/personnage";

Template.cardPersonnage.onCreated(function () {
    Meteor.subscribe('gangs');
});
Template.cardPersonnage.helpers
({
    personnages(){
        console.log(Personnages.find({}).fetch());
        return Personnages.find({});
    },
});
Template.cardPersonnage.events({
   'click .btn'(event){
       event.preventDefault();
       Meteor.call('gangs.addPersonnages', Session.get('gangId'),event.target.name)
   }
});

