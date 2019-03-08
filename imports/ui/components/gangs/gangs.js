import './gangs.html';

import { Template } from 'meteor/templating';

import { Gangs } from '../../../api/gangs.js';

Template.gangs.helpers({

    gangs(){
        return Gangs.find({});
    },
})

Template.gangs.events({

    'submit .new-gang'(event)
    {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Gangs.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value = '';

    },
});