// base styles
require('./styles/app.css');

// css components
require('./components/masthead/masthead.css');
require('./components/colophon/colophon.css');

// js components
const Button = require('./components/button/Button');

// initialize js components
componentSetup();
function componentSetup() {
  if (document.getElementsByClassName('button')) {
    new Button();
  }
}
