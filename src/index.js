const express = require('express');
const app = express();
const cors = require('cors')
require('./database/index');
require('dotenv/config');

app.use(cors());
const agendaSaoPaulo = require('./routes/AgendaSaoPaulo');
const agendaSantos = require('./routes/AgendaSantos');

app.use('/sao-paulo', agendaSaoPaulo);
app.use('/santos', agendaSantos);

app.listen(process.env.PORT || process.env.LOCAL_PATH, function () {
  console.log('Server is running')
});
