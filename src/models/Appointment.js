const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  chair: {
    type: Number,
    required: true,
    unique: true,
  },
  shift: {
    type: String,
    required: true,
    unique: true,
  },
})

const Appointment = mongoose.model('Appointment', UserSchema);

module.exports = Appointment;
