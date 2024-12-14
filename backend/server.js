require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:4000" }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/auth')
  .then(() => {
    console.log('Connected to MongoDB successfully')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
