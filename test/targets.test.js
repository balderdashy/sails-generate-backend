var assert = require('assert');
var targets = require('../lib/targets');
var templateFiles = require('./fixtures/template-files');

describe('Targets', function() {

  it('should generate targets (js) from a simple templates file', function() {
    var given = templateFiles.simpleJs.given;
    var actual = targets.buildTargets(given.templateFiles, given.coffeeTemplate);
    var expected = templateFiles.simpleJs.expected;

    assert.deepEqual(actual, expected);
  });

  it('should generate targets (coffee) from a simple templates file', function() {
    var given = templateFiles.simpleCoffee.given;
    var actual = targets.buildTargets(given.templateFiles, given.coffeeTemplate);
    var expected = templateFiles.simpleCoffee.expected;

    assert.deepEqual(actual, expected);
  });

  it('should generate the original targets (js)', function() {
    var given = targets;
    var actual = targets.buildTargets(given.templateFiles);
    var expected = templateFiles.originalJs.expected;

    assert.deepEqual(actual, expected);
  });

  it('should generate the original targets (coffee)', function() {
    var given = targets;
    var actual = targets.buildTargets(given.templateFiles, true);
    var expected = templateFiles.originalCoffee.expected;

    assert.deepEqual(actual, expected);
  });
});
