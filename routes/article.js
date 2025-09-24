const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');

// Create a new article
router.get('/', ArticleController.getAllArticles);

// Get an article by slug
router.get('/:slug', ArticleController.getArticleBySlug);

module.exports = router;