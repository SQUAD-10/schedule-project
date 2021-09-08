const express = require('express');
const app = express();
const cors = require('cors')
require('./database/index');

const appointmentRoute = require('./routes/AppointmentRouter');
app.use('/', appointmentRoute);
app.use('/teste', appointmentRoute);
app.use(cors());

app.listen(process.env.PORT || 3000, function () {
  console.log('Server is running')
});
