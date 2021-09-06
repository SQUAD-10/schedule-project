const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  const dados = await Appointment.find();
  res.status(200).json(dados);
});

router.post('/', async (req, res) => {
  const appointment = new Appointment({
    name: req.body.name,
    place: req.body.place
  });

  await appointment.save();
  res.status(200).json({appointment});
});

module.exports = router;
