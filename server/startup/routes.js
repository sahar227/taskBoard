const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const task = require('../routes/task');
const board = require('../routes/board');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/task', task);
  app.use('/api/board', board);
  app.use(error);
}