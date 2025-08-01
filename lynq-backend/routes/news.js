// backend/routes/news.js

const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// @route   GET /api/news
// @desc    Fetch tech news from a news API
// @access  Public
router.get('/', async (req, res) => {
  try {
    // --- Code to fetch from the News API ---
    // The NEWS_API_KEY is read from your .env file
    const newsRes = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API_KEY}`);
    
    // Map the articles to a cleaner format
    const articles = newsRes.data.articles.map(article => ({
      title: article.title,
      summary: article.description,
      url: article.url,
      image: article.urlToImage
    }));

    // Send the structured articles as a JSON response
    res.json(articles);

  } catch (err) {
    // This catch block handles any errors from the API call
    console.error('Error fetching news:', err.message);
    
    // It's good practice to send a specific error message if the API call fails
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Response Error:', err.response.data);
      res.status(err.response.status).send('News API Error: ' + err.response.data.message);
    } else if (err.request) {
      // The request was made but no response was received
      console.error('No response received from News API:', err.request);
      res.status(500).send('No response received from News API');
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).send('Server error fetching news');
    }
  }
});

module.exports = router;