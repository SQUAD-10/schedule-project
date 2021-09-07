const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Appointment', AppointmentSchema);
