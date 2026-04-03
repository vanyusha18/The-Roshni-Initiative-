require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/roshni')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/stories', require('./routes/stories'));
app.use('/api/villages', require('./routes/villages'));
app.use('/api/impact', require('./routes/impact'));
app.use('/api/seed', require('./routes/seed'));

app.get('/', (req, res) => {
  res.send('Roshni Initiative API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
