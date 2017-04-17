// base styles
require('./styles/app.css');

// css components
require('./styles/components/masthead.css');
require('./styles/components/colophon.css');
require('./styles/components/primary.css');
require('./styles/components/secondary.css');

// js components
const Button = require('./components/button/Button');

// initialize js components
componentSetup();
function componentSetup() {
  if (document.getElementsByClassName('button')) {
    new Button();
  }
}
