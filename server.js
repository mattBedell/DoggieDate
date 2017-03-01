const express = require('express');
const path = require('path')
const app = express();
const router = require('express').Router();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = path.join(__dirname, '/webpack.config.js');
const appIndex = path.join(__dirname, '/application/src/client/index.html');


const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

router.route('/')
  .get((req, res, next) => {
    res.sendFile(appIndex)
})


app.use(router)




const PORT = process.env.PORT | 3000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
