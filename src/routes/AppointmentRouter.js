const express = require('express');
const router = express.Router();
const Appointment = require('../models/AppointmentModel')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//CREATE
router.post('/', async (req, res) => {
  const appointment = new Appointment({
    name: req.body.name,
    place: req.body.place,
  });

  await appointment.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
});


//READ
router.get('/', async (req, res) => {
  const data = await Appointment.find();
  res.status(200).json(data);
});


//UPDATE
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


//DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Appointment.findByIdAndDelete(id)
    .then(data => {
      !data ?
      res.status(404).json({message: 'Não foi possível cancelar o agendamento. Agendamento não encontrado.'})
      :
      res.status(200).json({message: 'Agendamento cancelado'});
    })
    .catch(err => {res.status(500).json({message: 'Erro ao cancelar agendamento.'})
    });
});

module.exports = router;
