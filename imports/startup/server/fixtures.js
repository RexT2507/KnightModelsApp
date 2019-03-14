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
                img: '/img/Batman_Arkham.PNG',
                alias: 'Batman (Arkham Knight)',
                cout: 150,
            },
            {
                img: '/img/Joker.PNG',
                alias: 'Joker (Arkham Asylum)',
                cout: 105,
            },
            {
                img: '/img/Batman_Who_Laught.PNG',
                alias: 'The Batman Who Laughs',
                cout: 140,
            },
            {
                img: '/img/Heavy_Trooper.PNG',
                alias: 'LexCorp Heavy Trooper',
                cout: 55,
            },
            {
                img: '/img/Catwoman.PNG',
                alias: 'Catwoman (Modern Age)',
                cout: 69,
            },
            {
                img: '/img/Bane.PNG',
                alias: 'Bane (Rebirth)',
                cout: 161,
            },
        ];

        data.forEach(personnage => Personnages.insert(personnage));

    }

});