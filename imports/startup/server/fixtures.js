import { Meteor } from 'meteor/meteor';
import { Personnages } from '../../api/personnage/personnage.js';


Meteor.startup(() => 
{
    // Si la collection Personnages est vide
    if(Personnages.find().count() === 0)
    {
        const data = 
        [
            {
                alias: 'Batman (Arkham Knight)',
                cout: 150,
            },
            {
                alias: 'Joker (Arkham Asylum)',
                cout: 105,
            },
            {
                alias: 'The Batman Who Laughs',
                cout: 140,
            },
            {
                alias: 'LexCorp Heavy Trooper',
                cout: 55,
            },
            {
                alias: 'Catwoman (Modern Age)',
                cout: 69,
            },
            {
                alias: 'Bane (Rebirth)',
                cout: 161,
            },
        ];

        data.forEach(personnage => Personnages.insert(personnage));

    }

});