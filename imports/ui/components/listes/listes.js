import './listes.html';

import { Template } from 'meteor/templating';

import { Listes } from '../../../api/listes.js';

Template.listes.helpers({

    listes(){
        return Listes.find({});
    },
})

Template.listes.events({

    'submit .new-liste'(event)
    {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Listes.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value = '';

    },
});