var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  watch = require('gulp-watch'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  reload = browserSync.reload;


// We need to set up an error handler (which gulp-plumber calls).
// Otherwise, Gulp will exit if an error occurs, which is what we don't want.
var onError = function (err) {
  console.log('An error occurred:', err);
  this.emit('end');
};


// Our development server that serves all the assets and reloads the browser
// when any of them change (hence the watch calls in it)
gulp.task('serve', ['build-css', 'build-js'], function () {
  browserSync.init({
    // change 'playground' to whatever your local Nginx/Apache vhost is set
    // most commonly 'http://localhost/' or 'http://127.0.0.1/'
    // See http://www.browsersync.io/docs/options/ for more information
    proxy: 'http://wordpress.localhost.dev/'
  });

  // Reload the browser if any .php file changes within this directory
  watch('./**/*.php', reload);

  // Recompile sass into CSS whenever we update any of the source files
  watch('./assets/sass/**/*.scss', function () {
    gulp.start('build-css');
  });

  // Watch our JavaScript files and report any errors. May ruin your day.
  watch('./assets/js/**/*.js', function () {
    gulp.start('build-js');
  });
});


// Build task - should be used for bringing over bower components
// or other heavy tasks that shouldn't be run every time a serve is triggered
gulp.task('build', ['build-css', 'build-js', 'build-js', 'build-fonts']);


// Processes SASS into a CSS file
gulp.task('build-sass', function () {
  return gulp.src('./assets/sass/style.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(gulp.dest('assets/sass/.tmp'));
});


// Fonts
gulp.task('build-fonts', function () {
  return gulp.src([
      'bower_components/Font-Awesome/fonts/**/*'
    ])
    .pipe(gulp.dest('fonts'));
});


// Concat our app css with any bower components, minify and reload
// Example bower component src: bower_components/slick-carousel/slick/slick.css
gulp.task('build-css', ['build-sass'], function () {
  return gulp.src([
      'assets/sass/.tmp/style.css'
    ])
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
});


// Jshint outputs any kind of javascript problems you might have
// Only checks javascript files inside /js directory
gulp.task('jshint', function () {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});


// Concat and Uglify JS
gulp.task('build-js', function () {
  return gulp.src([
      'bower_components/modernizr/modernizr.js',
      'bower_components/jquery/dist/jquery.js',
      'assets/js/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets/js/.tmp'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
});


// The default task. Just built to avoid errors and provide advice.
gulp.task('default', function () {
  console.log('There is no default task. Run \'serve\' to serve the app.');
});
