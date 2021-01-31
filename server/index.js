const winston = require('winston');
const express = require('express');
const app = express();
const {port} = require('./environment');

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();

app.listen(port, () => winston.info(`Listening on port ${port}...`));