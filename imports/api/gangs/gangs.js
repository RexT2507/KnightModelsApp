import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {assignIn} from "lodash";


class Gang {
    constructor(doc) {
        assignIn(this, doc);
    }

    getPersonnage(){
        var listPersoDetail = [];
        if (this.listPersonnages){
            for (var i = 0; i < listPersonnages.length(); i++){
                listPersoDetail.push(Personnages.findOne({_id: listPersonnages[i]}))
            }
        }
        return listPersoDetail;
    }
    getPersonnagesId(){
        if (this.listPersonnages) {
            return this.listPersonnages;
        }
    }
    getUser(){
        if (this.user) {
            return this.Meteor.users.findOne({_id: this.user});
        }
    }
    getUserId(){
        if (this.user) {
            return this.user;
        }
    }
    getNom(){
        if (this.nom){
            return this.nom;
        }
    }
}
export const Gangs = new Mongo.Collection('gangs', {
    transform: (doc) => new Gang(doc)
});

Meteor.methods({
    'gangs.insert'(nom, nbrRep, listPersonnages){
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        var wtf = Gangs.insert({
            nom,
            nbrRep,
            listPersonnages,
            createdAt: new Date(),
            user: Meteor.userId()
        });
        console.log(wtf);
        return wtf;
    },
    'gangs.addPersonnages'(idGang, idPersonnage){
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        if (Gangs.findOne({_id: idGang}).user !== Meteor.userId()){
            throw new Meteor.Error('not-user-gang');
        }

        var listeIdPerso = Gangs.findOne({_id: idGang});
        listeIdPerso.listPersonnages.push(idPersonnage);
        Gangs.update({
            _id: idGang
        },{

            nom: listeIdPerso.nom,
            nbrRep: listeIdPerso.nbrRep,
            listPersonnages: listeIdPerso.listPersonnages,
            createdAt: listeIdPerso.createdAt,
            user: listeIdPerso.user
        })
    },
    'gangs.deletePersonnages'(idGang, idPosPersonnage){
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        if (Gangs.findOne({_id: idGang}).user !== Meteor.userId()){
            throw new Meteor.Error('not-user-gang');
        }

        var listeIdPerso = Gangs.findOne({_id: idGang});
        listeIdPerso.listPersonnages.splice(idPosPersonnage, 1);
        Gangs.update({
            _id: idGang
        },{
            nom: listeIdPerso.nom,
            nbrRep: listeIdPerso.nbrRep,
            listPersonnages: listeIdPerso.listPersonnages,
            createdAt: listeIdPerso.createdAt,
            user: listeIdPerso.user
        })
    }
});


