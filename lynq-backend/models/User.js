const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: {
    theme: { type: String, default: 'light' },
    techInterests: [{ type: String }]
  },
  savedArticles: [{
    title: String,
    summary: String,
    url: String
  }]
});

module.exports = mongoose.model('User', UserSchema);