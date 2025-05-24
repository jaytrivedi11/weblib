import { add } from './add.js';

export function doubleAdd(a, b) {
  const sum = add(a, b);
  return sum * 2;
}

// For browser global usage
window.doubleAdd = doubleAdd;
