'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReservationDetailsSchema = new Schema({
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
});

var ReservationSchema = new Schema({
  propertyId: String,
  reservations: [ReservationDetailsSchema]
})


module.exports = mongoose.model('Reservation', ReservationSchema);
