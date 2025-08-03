const test = require('node:test');
const assert = require('node:assert');
const { calculateTotalCalories } = require('../source/calorieCounter');

test('calculateTotalCalories sums calories', () => {
  const entries = [
    { name: 'Apple', calories: 95 },
    { name: 'Banana', calories: 105 },
  ];
  assert.strictEqual(calculateTotalCalories(entries), 200);
});

test('calculateTotalCalories handles empty list', () => {
  assert.strictEqual(calculateTotalCalories([]), 0);
});
