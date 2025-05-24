// Simple library to add two numbers

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}

// Export the function for use in other files
module.exports = add;
