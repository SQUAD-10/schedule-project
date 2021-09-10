const express = require('express');
const app = express();
const cors = require('cors')
require('./database/index');

const agendaSaoPaulo = require('./routes/AgendaSaoPaulo');
const agendaSantos = require('./routes/AgendaSantos');

app.use(cors());
app.use('/sao-paulo', agendaSaoPaulo);
app.use('/santos', agendaSantos);

app.listen(process.env.PORT || 3000, function () {
  console.log('Server is running')
});
