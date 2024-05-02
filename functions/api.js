const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let records = [];

router.get('/', (req, res) => {
  res.send('App is running..')
});

router.post('/add', (req, res) => {
  res.send('New record added.')
});

router.delete('/', (req, res) => {
  res.send('Deleted existing record.')
});

router.put('/', (req, res) => {
  res.send('Existing record updated.')
});

router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com'
    },
    {
      id: '002',
      name: 'Lily',
      email: 'lily@gmail.com'
    },
    {
      id: '003',
      name: 'Sam',
      email: 'sam@gmail.com'
    },
  ])
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);

// netlify-cli es el que esta fallando para ubicar el directorio de las funciones
// con la version vieja anda bien