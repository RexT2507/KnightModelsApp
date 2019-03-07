import { Template } from 'meteor/templating';

import './personnages.html';

Template.personnages.helpers
({
  personnages: function () 
  {
    return Session.get('personnages');
  }
});

Template.personnages.rendered = function() 
{
  Session.setDefault
  ('personnages', 
    [
      {nom: "Batman", cout: "500"},
      {nom: "Joker", cout: "420"},
    ]
  );
};