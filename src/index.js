const express = require('express');
const app = express();
require('./database/index');
require('./database/index')

const appointmentRoute = require('./routes/AppointmentRouter');
app.use('/', appointmentRoute);

app.listen(3000, function () {
  console.log('Server is running')
});
