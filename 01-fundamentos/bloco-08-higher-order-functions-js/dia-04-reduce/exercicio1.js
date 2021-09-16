const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((param1, param2) => param1.concat(param2), [])
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
