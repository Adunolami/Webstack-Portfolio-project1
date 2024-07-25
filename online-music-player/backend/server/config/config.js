require('dotenv').config(); // Load environment variables

module.exports = {
  mongoURI: process.env.MONGODB_URI
};
