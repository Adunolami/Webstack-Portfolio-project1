const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config'); // Adjust path to config

const app = express();

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json()); // For parsing application/json

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Online Music Player!');
});

// Test route to create a user
const User = require('./models/User'); // Adjust path to User model
app.post('/test', async (req, res) => {
  try {
    const user = new User({
      name: 'Test User',
      email: 'testuser@example.com'
    });
    await user.save();
    res.send('User created successfully');
  } catch (err) {
    res.status(500).send('Error creating user: ' + err.message);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
