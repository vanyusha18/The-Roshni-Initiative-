const express = require('express');
const router = express.Router();
const Village = require('../models/Village');

router.get('/', async (req, res) => {
  try {
    const villages = await Village.find().sort({ createdAt: -1 });
    res.json(villages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
