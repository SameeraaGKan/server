// Import the Express framework for building web applications
const express = require('express');

// Import Mongoose for interacting with MongoDB
const mongoose = require('mongoose');

// Import CORS to enable Cross-Origin Resource Sharing
const cors = require('cors');

// Import dotenv to load environment variables from a .env file
const dotenv = require('dotenv');

// Import the routes for managing todos
const todoRoutes = require('./routes/todoRoutes');

// Load environment variables from the .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  // Log a success message if connected successfully
  .then(() => console.log('✅ MongoDB connected'))
  // Log an error message if the connection fails
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Use the todo routes under the '/api' endpoint
app.use('/api', todoRoutes);

// Define the port for the server to listen on, defaulting to 5000 if not specified
const PORT = process.env.PORT || 5000;

// Start the server and log a message indicating the server is running
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
