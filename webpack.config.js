const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'application/src');
const APP_ENTRY = path.resolve(__dirname, 'application/src/client/index.html')
const BUILD_DIR = path.resolve(__dirname, 'application/src/client/public');

const isDev = process.env.NODE_ENV ? false : true;

const config = {
    entry:    [
    `${APP_DIR}/client/app/index.jsx`
  ],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        include: APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: isDev ? [ 'style-loader', 'css-loader' ] : ExtractTextPlugin.extract({
                                                                fallback: "style-loader",
                                                                use: "css-loader"
                                                                })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`style.css`)
  ]
}
if(isDev) {
  config.entry.unshift('webpack-hot-middleware/client')
  config.plugins = [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new HtmlWebpackPlugin({
    title: 'DoggieDate',
    xhtml: true,
    inject: false,
    template: require('html-webpack-template'),
    appMountId: 'root-container'
  })]
  config.target = 'web'
}
module.exports = config;
