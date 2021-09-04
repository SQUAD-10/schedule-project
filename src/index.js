const express = require('express');
const app = express();

const appointmentRoute = require('./routes/AppointmentRouter');
app.use('/', appointmentRoute);

app.use(express.json());



app.listen(3000);
