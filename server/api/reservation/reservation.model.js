'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  general: {
    status: String,
    name: String,
    reference: String,
    type: String,
    rate: String,
    GTD: String,
    ETA: String,
    rooms: String,
    LOS: String,
    adults: String,
    children: String,
    infants: String,
    checkin: Date,
    checkout: Date,
    booked: Date,
    total: Number
  }
});

module.exports = mongoose.model('Property', ReservationSchema);
