const express = require('express');
const router = express.Router();
const Appointment = require('../models/AppointmentModel')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  const data = await Appointment.find();
  res.status(200).json(data);
});

router.post('/', async (req, res) => {
  const appointment = new Appointment({
    name: req.body.name,
    place: req.body.place,
    date: req.body.date
  });

  await appointment.save();
  res.status(200).json({appointment});
});

router.put('/:id', (req, res) => {
  const id = req.params.id;

  Appointment.findByIdAndUpdate(id, req.body)
    .then(data => {
      !data ?
      res.status(404).json({message: 'A atualização falhou. Agendamento não encontrado.'})
      :
      res.status(200).json({message: 'Agendamento atualizado com sucesso.'});
    })
    .catch(err => {res.status(500).json({message: 'Erro ao atualizar agendamento.'})
    });
});

module.exports = router;
