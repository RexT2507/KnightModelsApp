import { Meteor } from 'meteor/meteor';
import { Personnages } from '../../api/personnage/personnage.js';


Meteor.startup(() => 
{
    // Si la collection Personnages est vide
    if(Personnages.find().count() === 0)
    {
        // Le fichier JSON de la collection se trouve dans le dossier private
        const data = JSON.parse(Assets.getText("knight_model_app_collection.json"));

        data.forEach(function (personnage) {
            Personnages.insert(personnage);
        })   

    }

});