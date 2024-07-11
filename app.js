// app.js
// Dependencies
const express = require('express');
const cors = require('cors');
const colorsController = require('./controllers/colorsController');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/colors', colorsController);

// Routes
// localhost:4001/
app.get('/', (req, res) => {
  res.send('Welcome to Colors App!');
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Export
module.exports = app;
