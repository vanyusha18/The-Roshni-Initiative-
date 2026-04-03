const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

// Get featured story
router.get('/featured', async (req, res) => {
  try {
    const story = await Story.findOne({ isFeatured: true }).sort({ createdAt: -1 });
    res.json(story);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
