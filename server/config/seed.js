/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Property = require('../api/property/property.model');
var User = require('../api/user/user.model');

Property.find({}).remove(function() {
  Property.create({
    name : 'The Charles Stewart',
    info : '3 star hotel on parnell square.'
  }, {
    name : 'The Ripley Court Hotel',
    info : '3 star hotel on talbot street'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});