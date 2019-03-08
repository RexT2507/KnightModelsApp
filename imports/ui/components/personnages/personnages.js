import { Template } from 'meteor/templating';

import { Personnages } from '../../../api/personnage';

import './personnages.html';

Template.personnages.helpers
({
    personnages: function(){
        return Personnages.find({});
    },
});