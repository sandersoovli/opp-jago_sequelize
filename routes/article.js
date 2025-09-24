const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');

// Get all articles
router.get('/', ArticleController.getAllArticles);

// Get an article by slug
router.get('/:slug', ArticleController.getArticleBySlug);

module.exports = router;