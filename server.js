const express = require('express');
const path = require('path');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const logger = require('morgan');
const loginRoute = require('./routes/login.js');
const usersRoute = require('./routes/users.js');
const dogsRoute = require('./routes/dogs.js');

const app = express();

const isDev = process.env.NODE_ENV || true;
const config = path.join(__dirname, '/webpack.config.js');
const compiler = webpack(config);

app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/api/users', usersRoute);
app.use('/api/dogs', dogsRoute);

app.use(history());

if (isDev) {
  require('dotenv').config();
  app.use(logger('dev'));
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
