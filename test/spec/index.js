var expect = require('chai').expect;

var MAX_SAFE_INT = require('max-safe-int');
var MIN_SAFE_INT = -MAX_SAFE_INT;

describe('random-float', function () {

  var randomFloat = require('../../');

  it('common', function () {

    expect(randomFloat()).to.be.a('number');
    expect(randomFloat()).to.be.within(MIN_SAFE_INT, MAX_SAFE_INT);
    expect(randomFloat()).to.be.match(/(-?\d+.[\d]{1,4})?$/);

    expect(randomFloat({
      max: 2
    })).be.be.within(MIN_SAFE_INT, 2);

    expect(randomFloat({
      min: -1,
      max: 1,
      fixed: 0
    })).be.be.oneOf([0, 1, -1]);

    expect(randomFloat({
      min: -1,
      max: 1,
      fixed: 2
    })).be.be.match(/(-1)|([01])(.[\d]{1,2})?$/);

    expect(randomFloat({
      min: 0,
      max: 'abc',
      fixed: 2
    })).be.be.match(/([012].[\d]{1,2})?$/);

    expect(randomFloat({
      min: 'abc',
      fixed: 2
    })).be.be.match(/(-?\d+.[\d]{1,2})?$/);

    expect(randomFloat({
      min: 2,
      max: 1,
      fixed: 2
    })).be.be.match(/([12].[\d]{1,2})?$/);

    expect(randomFloat({
      min: 1,
      max: 1,
    })).be.be.equal(1);

    expect(randomFloat({
      min: -1,
      max: -1,
      inspected: true
    })).be.be.equal(-1);

    expect(randomFloat({
      min: '-1',
      max: 1,
      fixed: 2
    })).be.be.match(/(-1)|([01])(.[\d]{1,2})?$/);

    expect(randomFloat({
      min: -1,
      max: '1',
      fixed: 2
    })).be.be.match(/(-1)|([01])(.[\d]{1,2})?$/);

  });
});
