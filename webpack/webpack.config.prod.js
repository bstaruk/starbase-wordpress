const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// postcss plugins
const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const postcssReporter = require('postcss-reporter');
const postcssCssnext = require('postcss-cssnext');
const postcssNested = require('postcss-nested');
const postcssRemoveRoot = require('postcss-remove-root');
const cssMqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

module.exports = webpackMerge(webpackConfigBase, {
  output: {
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  postcssImport,
                  stylelint(),
                  postcssReporter(),
                  postcssCssnext({
                    features: {
                      autoprefixer: {
                        grid: false
                      }
                    }
                  }),
                  postcssNested,
                  postcssRemoveRoot,
                  cssMqpacker({
                    sort: true
                  }),
                  cssnano({
                    autoprefixer: false,
                    safe: true
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});
