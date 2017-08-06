const express = require('express');
const morgan = require('morgan');
require('dotenv');
require('body-parser');

const routes = require('./routes/routes');

const app = express();


app.use(morgan('dev', {
  skip: function(req, res) {
    return res.statusCode < 400;
  },
  stream: process.stdout,
}));

app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`DOGGIE DATE API LISTENING ON PORT: ${PORT}`));

