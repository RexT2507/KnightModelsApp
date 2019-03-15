import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


class Gang {
    constructor(doc) {
        _.extend(this, doc);
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
}

export const Gangs = new Mongo.Collection('gangs', {
    transform: (doc) => new Gang(doc)
});

Meteor.methods({
    'gangs.insert'(nom, nbrRep, listPersonnages){
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Gangs.insert({
            nom,
            nbrRep,
            listPersonnages,
            createdAt: new Date(),
            user: Meteor.userId()
        })
    },
    'gangs.addPersonnages'(idGang, idPersonnage){
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        if (Gangs.findOne({_id: idGang}).getUser()._id !== idGang){
            throw new Meteor.Error('not-user-gang');
        }

        var listeIdPerso = Gangs.findOne({_id: idGang});
        listeIdPerso.push(idPersonnage)
        Gangs.update({
            _id: idGang
        },{
            listPersonnages: listeIdPerso
        })
    },
    'gangs.deletePersonnages'(idGang, idPosPersonnage){
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        if (Gangs.findOne({_id: idGang}).getUser()._id !== idGang){
            throw new Meteor.Error('not-user-gang');
        }

        var listeIdPerso = Gangs.findOne({_id: idGang});
        listeIdPerso.splice(idPosPersonnage, 1);
        Gangs.update({
            _id: idGang
        },{
            listPersonnages: listeIdPerso
        })
    }
});


