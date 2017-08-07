const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
require('dotenv');
require('body-parser');

const logger = require('./utils/logger');
const routes = require('./routes/routes');

const app = express();

// ----- LOGGING >>>
const accessStream = fs.createWriteStream('./logs/access.log', { flags: 'a' });
const errStream = fs.createWriteStream('./logs/err.log', { flags: 'a' });

app.use(morgan('combined', {
  skip: function(req, res) {
    return res.statusCode < 400;
  },
  stream: errStream,
}));
app.use(morgan('combined', {
  skip: function(req, res) {
    return res.statusCode >= 400;
  },
  stream: accessStream,
}));
app.use(morgan('dev'));
// ----- LOGGING />>>

app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => logger.debug(`DOGGIE DATE API LISTENING ON PORT: ${PORT}`));

