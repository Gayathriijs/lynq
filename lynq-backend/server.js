// lynq-backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// Initialize the Express application
const app = express();

// --- General Middleware ---
// These apply to all incoming requests and should be declared early.

// Body parser for JSON requests (essential for req.body to work)
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Add security headers
app.use(helmet());

// HTTP request logger
app.use(morgan('dev'));

// --- Routes ---
// These define the API endpoints for your application.
// They must come AFTER the middleware that processes the request (like express.json()).

// Basic route for testing server status
app.get('/', (req, res) => {
    res.send('Lynq API is running...');
});

// User Authentication Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Uncomment these as you implement them:
// app.use('/api/news', require('./routes/newsRoutes'));
// app.use('/api/user', require('./routes/preferencesRoutes'));
// app.use('/api/tools', require('./routes/toolsRoutes'));


// --- Start the Server ---
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});