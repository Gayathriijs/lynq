const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const newsRoutes = require('./routes/news');
const toolsRoutes = require('./routes/tools');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/tools', toolsRoutes);


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));