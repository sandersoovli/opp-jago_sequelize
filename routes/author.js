const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/author');

// Kõik artiklid ühe autori kohta
router.get('/:id', AuthorController.getArticlesByAuthor);

module.exports = router;
