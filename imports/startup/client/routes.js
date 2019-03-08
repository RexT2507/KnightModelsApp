import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Mes import de module
import '../../ui/pages/personnages/personnages.js';
import '../../ui/pages/listes/listes.js';
import '../../ui/pages/gangs/gangs.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

// Route du module personnages
FlowRouter.route('/personnages', 
{
  name: 'App.personnages',
  action() 
  {
    BlazeLayout.render('App_body', { main: 'App_personnages' });
  },
});

// Route du module listes
FlowRouter.route('/listes', 
{
  name: 'App.listes',
  action() 
  {
    BlazeLayout.render('App_body', { main: 'App_listes' });
  },
});

// Route du module gangs
FlowRouter.route('/gangs', 
{
  name: 'App.gangs',
  action() 
  {
    BlazeLayout.render('App_body', { main: 'App_gangs' });
  },
});