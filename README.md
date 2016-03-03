# Starbase - a sassy _spinoff.. with gulp!

Starbase is a WordPress starter theme, based on [_s](http://underscores.me) and extended to support NPM, Bower, Sass and Gulp.

### Installation
1. Clone project into your wp-content/themes directory
2. Run `npm install` and `bower install` to get dependencies
3. Run `gulp build` to initialize the project before serving for the first time

### Run Project
Starbase is built to be served up through Browsersync during development. This allows the site to auto-refresh as you build out your theme. Update your `gulpfile.js` with the path of your site (default is `http://wordpress.localhost.dev`) and then you're good to serve with `gulp serve`.

### Build Project
You can use `gulp build` with Starbase to force a one-time build of the theme scripts and styles. This task will also perform the heavier lifting that would otherwise bog down the serve task, such as copying over fonts from bower components.

### Bloaty Extras
Starbase comes with [JQuery](https://jquery.com), [Bourbon](http://bourbon.io) and [FontAwesome](http://fontawesome.io) installed to demonstrate how bower and gulp are used to manage assets.
