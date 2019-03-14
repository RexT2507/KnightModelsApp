import './gangs.html';

import { Template } from 'meteor/templating';

import { Gangs } from '../../../api/gangs/gangs.js';
import { Personnages } from '../../../api/personnage/personnage';

Template.gangs.helpers
({
    gangs() {
        return Gangs.find({});
    },
    personnages() {
        return Personnages.find({});
    }
})

Template.gangs.events
({

    'click .addBtn'(event)
    {
        event.preventDefault();

        var nom;
        var rep;

        if (document.getElementById("nomGangInput").value == ""){
            document.getElementsByClassName("err").innerHTML = "nom maquant ";
            console.log("nom maquant");
        }
        else {
            nom = document.getElementById("nomGangInput").value
        }
        if (document.getElementById("repInput").value == ""){
            rep = 350;
        }
        else{
            rep = document.getElementById("repInput").value;
        }
        Meteor.call('gangs.insert', nom, rep, []);
    },
});

Template.gangs.events
({
    'click .delete'() 
    {
        Meteor.call('gangs.remove', this._id);
    },
    'click .toggle-favoris'() 
    {
        Meteor.call('gangs.setFavoris', this._id, !this.favoris);
    },
});