/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Property = require('../api/property/property.model');
var Reservation = require('../api/reservation/reservation.model');
var User = require('../api/user/user.model');

Property.find({}).remove(function() {
  Property.create({
    general: {
      name: 'The Charles Stewart',
      addressLine1: '5 Parnell Squart',
      addressLine2: '',
      postCode: '15',
      suburb: 'Dublin',
      country: 'Ireland',
      phoneNumber: '00 353 (1) 2912312',
      altPhoneNumber: '00 353 (1) 2912313',
      confirmationEmail: 'booking@charlesstewart.ie',
      confirmationCCEmail: 'info@charlesstewart.ie',
      enquiryEmail: 'info@charlesstewart.ie',
      inventoryAlertEmail: 'helen@charlesstewart.ie',
      currency: 'EUR',
      timeZone: '',
      propertyHomePage: 'www.charlesstewart.ie',
      minimumRoomRate: 29
    }
  }, {
    general: {
      name: 'The Ripley Court',
      addressLine1: '22 Talbot Street',
      addressLine2: '',
      postCode: '15',
      suburb: 'Dublin',
      country: 'Ireland',
      phoneNumber: '00 353 (1) 391312',
      altPhoneNumber: '00 353 (1) 3912313',
      confirmationEmail: 'booking@ripleycourt.com',
      confirmationCCEmail: 'info@ripleycourt.com',
      enquiryEmail: 'info@ripleycourt.com',
      inventoryAlertEmail: 'helen@ripleycourt.com',
      currency: 'EUR',
      timeZone: '',
      propertyHomePage: 'http://www.charlesstewart.ie/',
      minimumRoomRate: 29
    }
  }, function() {
    console.log('finished populating properties');
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

Reservation.find({}).remove(function() {
  Reservation.create({
    "propertyId": "3423422",
    "reservations": [
      {
        "status": "success",
        "name": "Martin",
        "reference": "BB1502111024414",
        "type": "Double Room 2 Night B&B",
        "rate": "Double Room 2 Night B&B",
        "GTD": "Yes",
        "ETA": "06:00 pm",
        "rooms": "1",
        "LOS": "2",
        "adults": "2",
        "children": "1",
        "infants": "0",
        "checkin": 1429327444934,
        "checkout": 1429327444934,
        "booked": 1429327444934,
        "total": 160
      },
      {
        "status": "success",
        "name": "Washinton",
        "reference": "BB1502111024415",
        "type": "Single Room Bed & Breakfast",
        "rate": "Single Room Bed & Breakfast",
        "GTD": "Yes",
        "ETA": "06:00 pm",
        "rooms": "1",
        "LOS": "2",
        "adults": "2",
        "children": "1",
        "infants": "0",
        "checkin": 1429327444934,
        "checkout": 1429327444934,
        "booked": 1429327444934,
        "total": 160
      }
    ]
  }, function() {
    console.log('finished populating reservations');
  });
});
