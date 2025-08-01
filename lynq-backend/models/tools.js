// backend/models/tool.js

const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'Video Editing', 'AI Tools'
  platform: { type: [String], required: true }, // e.g., ['Web', 'App', 'Desktop']
  url: { type: String, required: true },
  rank: { type: Number, required: true, default: 0 }, // e.g., based on GitHub stars, reviews
});

module.exports = mongoose.model('Tool', ToolSchema);