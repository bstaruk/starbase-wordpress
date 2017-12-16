# starbase-wordpress

Starbase for WordPress is a starter theme for WordPress developers that is based on [_s](http://underscores.me), but modified to ditch jQuery & CSS and instead use a build system ([starbase](https://github.com/bstaruk/starbase)) that encompasses Webpack 3, ES6 & PostCSS (with linting) along with some of the juiciest open source tools around:

* [Node.js](https://github.com/nodejs/node) & [Yarn](https://github.com/yarnpkg)
* [Webpack 3](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel) (ES6) w/ [ESLint](https://github.com/eslint/eslint)
* [PostCSS](https://github.com/postcss/postcss) w/
  * [cssnano](https://github.com/ben-eb/cssnano)
  * [cssnext](https://github.com/MoOx/postcss-cssnext)
  * [PostCSS Nested](https://github.com/postcss/postcss-nested)
  * [stylelint](https://github.com/stylelint/stylelint)
  * [MQPacker](https://github.com/hail2u/node-css-mqpacker)
* ...and more!

## license

Starbase (all versions) is completely free, open source and public domain, so you are free to do whatever you wish with it -- commercially or personally. You can buy me a beer next time you're in Boston, star the project and tell a friend, or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!

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

## features you may want to remove

### fetch & promise polyfills

Because Starbase was built to accommodate ES6 & CommonJS (and not JQuery) it is assumed that you'll be using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for asynchronous requests.

Fetch is supported in all modern browsers, but some old dogs still don't support it and that's what we need the [es6-promise](https://github.com/stefanpenner/es6-promise) & [whatwg-fetch](https://github.com/github/fetch) polyfills for.

If you want to remove these for any reason, perform the following steps:

1. run `yarn remove es6-promise whatwg-fetch` in the project root to remove the dependencies
2. remove the first few lines of `/src/bundle.js` (it'll be obvious which ones)

_Note: if you think you might use fetch in the future, comment-out the includes instead of deleting them. Commented-out code is stripped out in production builds._

## features you may want to customize

### javascript & css linting

Starbase uses [ESLint](http://eslint.org/) for Javascript (ES6) linting and [stylelint](https://github.com/stylelint/stylelint) for CSS linting. The configs (`/.eslintrc` and `/.stylelintrc` respectively) included out of the box contain some basic common rules. Modify them to your liking to encourage consistent code throughout your project.

#### airbnb eslint config

Starbase enforces the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with ESLint via [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). These rules are basically the industry standard in 2017 so I'd recommend adhering to them, but you can override individual rules via the project `/.eslintrc` file. I've included a couple basic overrides (in `/.eslintrc`) to demonstrate usage.

##### to remove the airbnb eslint config:

1. in `/.eslintrc`, remove the line that says `extends`
2. in `/package.json`, remove the `eslint-config-airbnb` dependency
3. run `yarn` (or `npm update` if you hate yarn)

After completing the steps above, the only rules that eslint will enforce are the ones you define in the `rules` object in `/.eslintrc`.

## features you may want to know about

### global css variables

Starbase supports global CSS variables via the [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) pseudo-element, which can be found in `/src/variables/variables.css`. You can split your variables into multiple files, and just import them into `/src/variables/variables.css` if you'd like them to be more granular.

These variables automatically injected into any CSS in the `/src/components` and `/src/app` directories, so they are always available for use in your app & component stylesheets.

Each component that comes with Starbase uses at least one variable to demonstrate the functionality.

All variables are cleaned up in your production code and only the values will remain, so there is no bloat or downside to using these variables. Go nuts!
