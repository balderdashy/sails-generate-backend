/**
 * sails-generate-backend
 *
 * Usage:
 * + Automatically called by `sails new`
 *
 * @type {Object}
 */
var targets = require('./targets');
var coffeeTemplate = process.argv.indexOf('--coffee') !== -1;

module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: require('./before'),

  targets: targets.buildTargets(targets.templateFiles, coffeeTemplate)
};
