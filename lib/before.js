/**
 * Module dependencies
 */

var util = require('util');
var crypto = require('crypto');
var _ = require('lodash');




/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Dictionary} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

  //
  // Validate custom scope variables which
  // are required by this generator.
  //
  //
  if ( !scope.rootPath ) {
    return cb(new Error(
      'Missing scope variable: `rootPath`\n' +
      'Please make sure it is specified and try again.'
    ));
  }

  //
  // Determine default values based on the
  // available scope.
  //
  _.defaults(scope, {
    currentTime: new Date(),
    viewEngine: 'ejs'
  });


  //  ┌─┐┬ ┬┌─┐┌┬┐┌─┐┌┬┐┬┌─┐┌─┐  ┬  ┬┬┌─┐┬ ┬  ┌─┐┌─┐┌┬┐┌┬┐┬┌┐┌┌─┐┌─┐
  //  │  │ │└─┐ │ │ │││││┌─┘├┤   └┐┌┘│├┤ │││  └─┐├┤  │  │ │││││ ┬└─┐
  //  └─┘└─┘└─┘ ┴ └─┘┴ ┴┴└─┘└─┘   └┘ ┴└─┘└┴┘  └─┘└─┘ ┴  ┴ ┴┘└┘└─┘└─┘
  //  ┌─    ┌─┐┌─┐┬─┐  ╦  ╦╦╔═╗╦ ╦╔═╗  ╦╔═╗    ─┐
  //  │───  ├┤ │ │├┬┘  ╚╗╔╝║║╣ ║║║╚═╗  ║╚═╗  ───│
  //  └─    └  └─┘┴└─   ╚╝ ╩╚═╝╚╩╝╚═╝o╚╝╚═╝    ─┘
  //
  // If a view engine other than EJS was specified as `viewEngine`,
  // then try and use another generator, which might (hopefully) be
  // installed.
  if (scope.viewEngine && scope.viewEngine !== 'ejs') {
    scope.modules['views'] = 'sails-generate-views-'+scope.viewEngine;
  }//>-

  // Enable partials and layout for handlebars
  // > Deprecated.  Will be completely removed in Sails v1.0.
  if (scope.viewEngine === 'handlebars') {
    scope.layout = 'layouts/layout';
    scope.partials = 'partials';
  }//>-

  // By default (or if "ejs" was explicitly set for `viewEngine`),
  // include `layout` in the generated `config/views.js` file.
  // > Will be modified(+kind of deprecated) in Sails v1.0.
  if (scope.viewEngine && scope.viewEngine !== 'ejs') {
    scope.layout = 'layout';
  }//>-



  //  ┌┐ ┌─┐┬┌─┌─┐  ┌─┐  ┬─┐┌─┐┌┐┌┌┬┐┌─┐┌┬┐  ┌─┐┌─┐┌─┐┌─┐┬┌─┐┌┐┌  ┌─┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  //  ├┴┐├─┤├┴┐├┤   ├─┤  ├┬┘├─┤│││ │││ ││││  └─┐├┤ └─┐└─┐││ ││││  └─┐├┤ │  ├┬┘├┤  │
  //  └─┘┴ ┴┴ ┴└─┘  ┴ ┴  ┴└─┴ ┴┘└┘─┴┘└─┘┴ ┴  └─┘└─┘└─┘└─┘┴└─┘┘└┘  └─┘└─┘└─┘┴└─└─┘ ┴
  //  ┌─    ┌─┐┌─┐┬─┐  ╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╗╔  ╦╔═╗    ─┐
  //  │───  ├┤ │ │├┬┘  ╚═╗║╣ ╚═╗╚═╗║║ ║║║║  ║╚═╗  ───│
  //  └─    └  └─┘┴└─  ╚═╝╚═╝╚═╝╚═╝╩╚═╝╝╚╝o╚╝╚═╝    ─┘
  // Now bake up a session secret to inject into our `config/session.js` file.

  // Combine random and case-specific factors into a base string
  // (creation date, random number, and Node.js version string)
  var baseStringToHash = '';
  baseStringToHash += (new Date()).getTime();
  baseStringToHash += Math.random() * (Math.random() * 1000);
  baseStringToHash += process.version;

  // Now cook up some hash using the base string.
  // > This will be used as the session secret we inject into the `config/session.js` file.
  scope.secret = crypto.createHash('md5').update(baseStringToHash).digest('hex');

  // Continue onwards to generate all those exciting files.
  return cb();
};

