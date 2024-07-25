require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const musicRoutes = require('./routes/musicRoutes');

const app = express();
connectDB();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
