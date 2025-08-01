// backend/routes/tools.js

const express = require('express');
const router = express.Router();
const Tool = require('../models/tools');

router.get('/search', async (req, res) => {
  try {
    const { keyword } = req.query; 
    
    
    const regex = new RegExp(keyword, 'i');

    const tools = await Tool.find({
      $or: [
        { name: { $regex: regex } },
        { description: { $regex: regex } },
        { category: { $regex: regex } },
      ]
    }).sort({ rank: 1 }); 

    res.json(tools);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;