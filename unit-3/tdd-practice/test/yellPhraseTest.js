const chai = require('chai');
const assert = chai.assert;
let yellPhrase = require('../yellPhrase.js').yellPhrase;

describe('yellPhrase', () => {
  it('should convert a string to all caps', () => {
    assert.equal(yellPhrase('hey there'), 'HEY THERE');
    assert.equal(yellPhrase('hi there'), 'HI THERE');
  });
  it('should display a message if given a non string input', () => {
    assert.equal(yellPhrase(['hey there']), 'Please input a string');
  });
  it('should display a message if given a non string input', () => {
    assert.equal(yellPhrase(), 'Please input a phrase');
  });
});
