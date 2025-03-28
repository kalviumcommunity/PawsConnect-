const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes'); // Import your routes
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.URI; // Ensure your .env file contains the URI

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Use Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Connected to back-end');
});

// Start the Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
