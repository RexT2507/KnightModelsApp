import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const Gangs = new Mongo.Collection('gangs');


if(Meteor.isServer)
{
    Meteor.publish('gangs', function()
    {
        return Gangs.find({});
    });
}