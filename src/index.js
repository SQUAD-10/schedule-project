const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('NEW');
});

app.get('/post', (req, res) => {
  res.send('DATA');
});

app.listen(3000);
