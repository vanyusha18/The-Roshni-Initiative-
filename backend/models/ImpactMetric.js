const mongoose = require('mongoose');

const ImpactMetricSchema = new mongoose.Schema({
  studentsReached: { type: Number, default: 0 },
  villagesTransformed: { type: Number, default: 0 },
  womenTrained: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ImpactMetric', ImpactMetricSchema);
