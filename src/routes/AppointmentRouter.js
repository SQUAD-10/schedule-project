const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment')

router.use(express.json());

router.get('/', (req, res) => {
  res.send('NEW');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('OK')

});

module.exports = router;
