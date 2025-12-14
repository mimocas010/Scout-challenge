const Analytics = require("./Analytics.js");

class SuccessRateAnalytics extends Analytics {
  calculate(data) {
    return data.successes / data.attempts;
  }
}

module.exports = SuccessRateAnalytics;
