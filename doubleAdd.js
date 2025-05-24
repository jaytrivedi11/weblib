const add = require('./add');

function doubleAdd(a, b) {
  const sum = add(a, b);
  return sum * 2;
}

module.exports = doubleAdd;
