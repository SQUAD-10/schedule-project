const express = require('express');
//const Appointment = require('./models/Appointment')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('NEW');
});

router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
