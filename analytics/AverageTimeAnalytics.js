const Analytics = require("./Analytics.js");

class AverageTimeAnalytics extends Analytics {
  calculate(data) {
    return data.totalTime / data.attempts;
  }
}

module.exports = AverageTimeAnalytics;
