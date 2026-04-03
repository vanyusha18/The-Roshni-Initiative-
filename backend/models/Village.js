const mongoose = require('mongoose');

const VillageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  beforeImage: { type: String },
  afterImage: { type: String },
  timeline: [{
    month: String, // e.g., 'Jan'
    event: String  // e.g., 'Solar installed'
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Village', VillageSchema);
