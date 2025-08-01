// backend/routes/user.js

const express = require('express');
const router = express.Router();

// @route   GET /api/user/profile
// @desc    Get a placeholder user profile (Unprotected)
// @access  Public
router.get('/profile', (req, res) => {
  // This is a simple, unprotected route that returns static user data.
  // It does not check for a logged-in user.
  const staticUserData = {
    name: 'Guest User',
    preferences: {
      theme: 'light',
      techInterests: ['AI', 'Web Dev']
    },
    savedArticles: []
  };

  res.json(staticUserData);
});

// Other routes like /save-article would not be possible without user authentication.
// You would need to store this data somewhere, perhaps in a session or the frontend itself.
// But for a simple, unprotected system, this functionality is not feasible on the backend.

module.exports = router;