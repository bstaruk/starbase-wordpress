# wordpress-starbase
Starbase for WordPress is a starter/dev theme that is based on [_s](http://underscores.me), but modified to ditch jQuery & CSS and instead use a build system that encompasses Webpack 2, ES6 & PostCSS along with some of the juiciest open source tools around such as:

* [Node.js](https://github.com/nodejs/node) & [Yarn](https://github.com/yarnpkg)
* [Webpack 2](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel) (ES6) transpiling w/ linting by [ESLint](https://github.com/eslint/eslint)
* [PostCSS](https://github.com/postcss/postcss) w/ [cssnext](https://github.com/MoOx/postcss-cssnext)
* ...and more!

## license
Starbase is fully open source and public domain, so you are free to do whatever you wish with it -- commercially or personally. You can buy me a beer next time you're in Boston, give me credit in a [Konami code easter egg](http://konamicodesites.com/), or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!

## getting started
After completing the steps below, you will be ready to begin using Starbase:

1. Install [Node.js](https://nodejs.org) (latest LTS recommended)
2. Install [Yarn](https://yarnpkg.com)
3. Clone Starbase into your themes folder
4. Install dependencies by running `yarn` in the new theme root directory

_Note: if you hate Yarn for some reason, you can skip Step 2 and use `npm install` instead  of `yarn` in Step 4._

## building, watching & developing

### local development
Starbase uses Webpack to watch the `/src` folder and rebuild the assets (to `/assets`) when changes are detected.

Run `npm run watch` in the project root to begin the build & watch process. As you modify code in `/src`, the project will be recompiled and the contents of `/assets` will refresh.

```
cd /path/to/starbase
npm run watch
```

To run a one-time build without watching for changes, use `npm run build`.

_Note: the contents of `/assets` will not be deleted during the build process. If you'd like to clean up the directory for any reason, just delete the entire `/assets` folder and rebuild it via `npm run build`._

## features you may want to customize

### javascript linting

Starbase uses [ESLint](http://eslint.org/) for Javascript (ES6) linting. The config (`/.eslintrc`) included out of the box is very basic and does not contain many rules. I recommend modifying this to your liking. Check out [the official docs](http://eslint.org/docs/2.0.0/rules/) for more information.
