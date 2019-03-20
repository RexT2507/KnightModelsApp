import './listes.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Gangs } from '../../../api/gangs/gangs.js';

Template.listes.onCreated(function () {
    Meteor.subscribe('gangs');
});

Template.listes.helpers({

    listes(){
        console.log(Gangs.find({}));
        return Gangs.find({user: Meteor.userId()});
    },
});