const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config'); // Import configuration

const app = express();

// Log the MongoDB URI to check if it's loaded correctly
console.log('MongoDB URI:', config.mongoURI);

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Online Music Player!');
});

// Test route to create a user
const User = require('./models/User'); // Import User model
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
