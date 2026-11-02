'use strict';
const Homey = require('homey');
const calculations = require('./lib/calculations');

class App extends Homey.App {
  async onInit() {
    this.homey.flow.getActionCard('calculate_cost')
      .registerRunListener(async args => calculations.energyCost(args.kwh, args.price_per_kwh, args.daily_fixed_charge));
    this.homey.flow.getActionCard('forecast_month')
      .registerRunListener(async args => calculations.monthlyForecast(args.daily_kwh, args.price_per_kwh, args.days, args.daily_fixed_charge));
    this.homey.flow.getActionCard('budget_remaining')
      .registerRunListener(async args => calculations.budgetRemaining(args.budget, args.spent));
    this.homey.flow.getConditionCard('cost_above')
      .registerRunListener(async args => calculations.costAbove(args.kwh, args.price_per_kwh, args.cost_limit));
    this.homey.flow.getConditionCard('power_above')
      .registerRunListener(async args => calculations.powerAbove(args.power_w, args.power_limit_w));
  }
}

module.exports = App;
