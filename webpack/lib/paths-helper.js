const path = require('path');

module.exports = function pathsHelper(a) {
  const paths = {
    'assets': path.resolve(__dirname, '../../assets'),
    'components': path.resolve(__dirname, '../../src/components'),
    'src': path.resolve(__dirname, '../../src'),
    'variables': path.resolve(__dirname, '../../src/styles/variables.css')
  };
  return paths[a];
};
