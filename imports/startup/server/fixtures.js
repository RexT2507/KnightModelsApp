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
                categori: 'The Brave And The Bold',
                alias: 'Batman (Arkham Knight)',
                cout: 150,
            },
            {
                img: '/img/Joker.PNG',
                categori: 'Joker',
                alias: 'Joker (Arkham Asylum)',
                cout: 105,
            },
            {
                img: '/img/Batman_Who_Laught.PNG',
                categori: 'Agent libre',
                alias: 'The Batman Who Laughs',
                cout: 140,
            },
            {
                img: '/img/Heavy_Trooper.PNG',
                categori: 'Agent libre',
                alias: 'LexCorp Heavy Trooper',
                cout: 55,
            },
            {
                img: '/img/Catwoman.PNG',
                categori: 'Organized crime',
                alias: 'Catwoman (Modern Age)',
                cout: 69,
            },
            {
                img: '/img/Bane.PNG',
                categori: 'Bane',
                alias: 'Bane (Rebirth)',
                cout: 161,
            },
        ];

        data.forEach(personnage => Personnages.insert(personnage));

    }

});