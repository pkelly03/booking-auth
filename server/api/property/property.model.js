'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PropertySchema = new Schema({
  general: {
    name: String,
    propertyId: String,
    addressLine1: String,
    addressLine2: String,
    postCode: String,
    suburb: String,
    country: String,
    phoneNumber: String,
    altPhoneNumber: String,
    confirmationEmail: String,
    confirmationCCEmail: String,
    enquiryEmail: String,
    inventoryAlertEmail: String,
    currency: String,
    timeZone: String,
    propertyHomePage: String,
    minimumRoomRate: Number
  }
});

module.exports = mongoose.model('Property', PropertySchema);
