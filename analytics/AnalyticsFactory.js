const AverageTimeAnalytics = require("./AverageTimeAnalytics.js");
const SuccessRateAnalytics = require("./SuccessRateAnalytics.js");

class AnalyticsFactory {
  static create(type) {
    switch (type) {
      case "successRate":
        return new SuccessRateAnalytics();
      case "averageTime":
        return new AverageTimeAnalytics();
      default:
        throw new Error("Tipo de analytics desconhecido");
    }
  }
}

module.exports = AnalyticsFactory;
