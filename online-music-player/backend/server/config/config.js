require('dotenv').config(); // Load environment variables

console.log('Loaded environment variables:', process.env);

module.exports = {
  mongoURI: process.env.MONGODB_URI
};
