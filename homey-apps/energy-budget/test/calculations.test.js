'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const c = require('../lib/calculations');
test('energy cost adds usage and daily fixed charges', () => {
  assert.deepEqual(c.energyCost(10, 0.3, 0.5), { estimated_cost: 3.5 });
});
test('forecast projects usage and cost over the requested period', () => {
  assert.deepEqual(c.monthlyForecast(8, 0.25, 30, 0.1), { monthly_energy_kwh: 240, monthly_cost: 63 });
});
test('remaining budget can report an overspend', () => {
  assert.deepEqual(c.budgetRemaining(100, 120), { remaining_budget: -20 });
});
test('thresholds are inclusive and inputs are checked', () => {
  assert.equal(c.costAbove(4, 0.25, 1), true);
  assert.equal(c.powerAbove(2000, 2000), true);
  assert.throws(() => c.monthlyForecast(1, 0.2, 0));
});
