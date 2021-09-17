const express = require('express');
const router = express.Router();
const SaoPaulo = require('../models/SaoPaulo');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//CREATE
router.post('/post', (req, res) => {
  const {name, email, date} = req.body;
  const appointment = new SaoPaulo({
    name,
    email,
    date,
  });

  SaoPaulo.find({date: date})
    .then(data => {
      data.length < 3 ?  //LIMITE DE 240 PESSOAS EM SP
      appointment.save()
        .then(data => {
          res.status(200).json('Agendamento realizado com sucesso.');
        })
        .catch(err => {
          res.status(500).json('Não foi possível concluir o agendamento. Verifique se todos os campos foram preenchidos.' )
        })
      :
      res.status(500).json('Não foi possível realizar o agendamento. Está data já está com máxima lotação.')
    })
});


//READ
router.get('/:email', async (req, res) => {
  const email = req.params.email;
  await SaoPaulo.find({email: email})
  .sort('date')
  .then(data => {
    data.length > 0 ?
    res.status(200).json(data)
    :
    res.status(404).json({message: 'Nenhum agendamento encontrado.'})
  })
  .catch(err => {
    res.status(500).json({message: 'Aconteceu um erro, tente novamente.'})
  })
});


//UPDATE
router.put('/:id', (req, res) => {
  const id = req.params.id;

  SaoPaulo.findByIdAndUpdate(id, req.body)
    .then(data => {
      !data ?
      res.status(404).json({message: 'Não foi possível editar o agendamento: Agendamento não encontrado.'})
      :
      res.status(200).json({message: 'Agendamento editado com sucesso.'});
    })
    .catch(err => {res.status(500).json({message: 'Erro ao editar agendamento.'})
    });
});


//DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  SaoPaulo.findByIdAndDelete(id)
    .then(data => {
      !data ?
      res.status(404).json({message: 'Não foi possível cancelar o agendamento: Agendamento não encontrado.'})
      :
      res.status(200).json({message: 'Agendamento cancelado com sucesso.'});
    })
    .catch(err => {res.status(500).json({message: 'Erro ao cancelar agendamento.'})
    });
});

module.exports = router;
