const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  childName: { type: String, required: true },
  age: { type: Number },
  storyLine: { type: String, required: true },
  image: { type: String },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', StorySchema);
