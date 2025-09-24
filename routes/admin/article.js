const express = require('express');
const router = express.Router();
const ArticleAdminController = require('../../controllers/admin/article');

// CREATE: lisa uus artikkel
router.post('/article/create', ArticleAdminController.createArticle);

// UPDATE: GET toob artikli andmed, POST uuendab artikli
router.route('/article/edit/:id')
    .get(ArticleAdminController.updateArticle)
    .post(ArticleAdminController.updateArticle);

// DELETE: kustuta artikkel
router.post('/article/delete/:id', ArticleAdminController.deleteArticle);

module.exports = router;
