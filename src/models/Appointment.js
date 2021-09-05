const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
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

module.exports = mongoose.model('Appointment', AppointmentSchema);
