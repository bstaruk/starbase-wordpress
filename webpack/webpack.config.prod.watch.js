const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.prod.js');

module.exports = webpackMerge(webpackConfigBase, {
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});
