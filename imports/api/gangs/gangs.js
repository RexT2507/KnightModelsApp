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
    }
});


