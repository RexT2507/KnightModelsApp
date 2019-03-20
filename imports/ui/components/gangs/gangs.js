import './gangs.html';
import '../personnage/personnage';

import { Template } from 'meteor/templating';

import { Gangs } from '../../../api/gangs/gangs.js';
import { Personnages } from '../../../api/personnage/personnage';
import { Session } from 'meteor/session'

Template.gangs.onCreated(function () {
    Meteor.subscribe('gangs');
    Meteor.subscribe('personnages');
});

Template.gangs.helpers
({
    nomGang() {
        console.log(Gangs.find({}));
        return Gangs.find({_id: Session.get('idGang')});
    },
    personnages() {
        return Personnages.find({});
    }
});

Template.gangs.events
({

    'click .addBtn'(event)
    {
        event.preventDefault();

        var nom;
        var rep;

        var erreur = document.createElement('span');

        if (document.getElementById("nomGangInput").value === ""){
            console.log("connardman");
            erreur.innerHTML = "nom maquant ";
            document.getElementsByClassName("err").appendChild(erreur);
        }
        else {
            nom = document.getElementById("nomGangInput").value;
            if (document.getElementById("repInput").value === "") {
                rep = 350;
            }
            else{
                rep = document.getElementById("repInput").value;
            }
            Meteor.call('gangs.insert', nom, rep, [], (error, result) => {
                if (error)
                    throw error;
                else
                    Session.set('gangId', result);});
        }
    },
});