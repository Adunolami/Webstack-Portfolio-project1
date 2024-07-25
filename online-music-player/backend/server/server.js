// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use('/api', authRoutes);

mongoose.connect('mongodb://localhost/online-music-player', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));
