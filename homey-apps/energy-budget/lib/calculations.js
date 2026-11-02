'use strict';
function nonNegative(value, name) {
  if (!Number.isFinite(value) || value < 0) throw new Error(`${name} must be a non-negative number.`);
  return value;
}
function energyCost(kwh, pricePerKwh, dailyFixed = 0) {
  nonNegative(kwh, 'Energy usage');
  nonNegative(pricePerKwh, 'Price per kWh');
  nonNegative(dailyFixed, 'Daily fixed charge');
  return { estimated_cost: (kwh * pricePerKwh) + dailyFixed };
}
function monthlyForecast(dailyKwh, pricePerKwh, days, dailyFixed = 0) {
  nonNegative(dailyKwh, 'Daily energy usage');
  nonNegative(days, 'Number of days');
  if (!Number.isInteger(days) || days < 1 || days > 366) throw new Error('Number of days must be a whole number from 1 to 366.');
  const estimate = energyCost(dailyKwh * days, pricePerKwh, dailyFixed * days).estimated_cost;
  return { monthly_energy_kwh: dailyKwh * days, monthly_cost: estimate };
}
function budgetRemaining(budget, spent) {
  return { remaining_budget: nonNegative(budget, 'Budget') - nonNegative(spent, 'Amount spent') };
}
function costAbove(kwh, pricePerKwh, threshold) {
  nonNegative(threshold, 'Cost threshold');
  return energyCost(kwh, pricePerKwh).estimated_cost >= threshold;
}
function powerAbove(powerW, limitW) {
  return nonNegative(powerW, 'Current power') >= nonNegative(limitW, 'Power limit');
}
module.exports = { energyCost, monthlyForecast, budgetRemaining, costAbove, powerAbove };
