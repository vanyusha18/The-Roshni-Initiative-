const express = require('express');
const router = express.Router();
const ImpactMetric = require('../models/ImpactMetric');

router.get('/', async (req, res) => {
  try {
    const metrics = await ImpactMetric.findOne().sort({ createdAt: -1 });
    res.json(metrics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
