# D3 Components

> A Project to contain and document reusable D3 components.


## Dependencies

* [Node](https://nodejs.org/en/).
* [Yarn](https://yarnpkg.com/).
* [Gulp](http://gulpjs.com/) installed globally: `npm i -g gulp`.


## Getting started

* From the project root, run `yarn` to get dependancies from NPM.
* Run `gulp watch` or `npm start` to start the project.
* This will start on [localhost:3000](http://localhost:3000/) and automatically reload when any changes are made using [BrowserSync](https://browsersync.io/).


## Structure

This project provides a platform on which to build with D3 in components to promote reuse. It uses:

* Gulp, to run our build tasks.
* [Browserify](http://browserify.org/), to allow us to write our JavaScript in components and require D3 (or any other libraries) directly.
* [SASS](http://sass-lang.com/), with [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to allow us to write CSS in pre-processed components using ITCSS.
* [Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps), so we can see see which component a line of JavaScript or CSS comes from when debugging.


## Adding components

* Create independent view(s) (in `src/views`), JavaScript (in `src/js/components`) and SASS (in `src/sass/components`).
* When using the `_file-header.hbs` partial, pass a `bodyClass` parameter to add a class name to the body, then use this class name to override CSS on the body tag in `_base.scs`.
* Add comments to all JavaScript that uses the D3 API, and any vanilla javaScript or SASS/CSS that may need some explanation.
* Name files consistently so it's clear which module they belong to.
* Add a link to the component with a description to the project index including any code used that should be noted.
* Add the components to this readme.


## Updating components

If it's necessary to add to or amend a component to make it work for your project, update the component in this repo  where appropriate.

It may be necessary to revisit components as browser support requirements change and ES6 and new CSS features can be used more freely.


## Components

None yet. Stay tuned.
