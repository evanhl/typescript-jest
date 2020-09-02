'use strict';

const ans = require('./hiker');

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(ans()).toEqual(42);
  });
});
