'use strict'

require('../index')();
let assert = require('assert');

describe('test except operator', () => {
  it('should be empty', () => {
    let a1 = [1, 2, 3];
    let a2 = [3, 2, 1, 2, 0];

    assert.deepEqual(a1.except(a2).toArray(), []);
  });

  it('should have 1 element', () => {
    let a1 = ['a', 'b', 1, null];
    let a2 = [null, 1, 'b'];

    assert.deepEqual(a1.except(a2).toArray(), ['a']);
  });

  it('has custom comparer', () => {
    let a1 = [8, 0, '1', '2'];
    let a2 = [1, 2];

    assert.deepEqual(a1.except(a2, (item1, item2) => item1 == item2).toArray(), [8, 0]);
  });

  it('map<k, v>', () => {
    let m1 = new Map();
    let m2 = new Map();

    m1.set('abc', 1);
    m1.set('edge', 2);

    m2.set('abc', 2);
    m2.set('aaa', 1);

    let r = m1.except(m2, ([k1, v1], [k2, v2]) => k1 === k2).toArray();
    assert.deepEqual(r, [['edge', 2]]);
  });
});