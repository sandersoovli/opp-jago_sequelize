const db = require('../models');
const Article = db.Article;
const Author = db.Author; // lisa Author mudel
const { Op } = require('sequelize');

class ArticleController {

    // kõik artiklid koos autori nimega
    async getAllArticles(req, res) {
        try {
            const articles = await Article.findAll({
                include: [
                    {
                        model: Author,
                        as: 'author',         // peab vastama Article.js assotsiatsiooni nimele
                        attributes: ['name']  // toob ainult autori nime
                    }
                ]
            });
            res.json(articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
            res.status(500).json({ error: 'An error occurred while fetching articles' });
        }
    }

    // konkreetne artikkel slug-i järgi koos autori nimega
    async getArticleBySlug(req, res) {
        try {
            const article = await Article.findOne({
                where: { slug: { [Op.eq]: req.params.slug } },
                include: [
                    {
                        model: Author,
                        as: 'author',
                        attributes: ['name']
                    }
                ]
            });
            if (article) {
                res.json(article);
            } else {
                res.status(404).json({ error: 'Article not found' });
            }
        } catch (error) {
            console.error('Error fetching article:', error);
            res.status(500).json({ error: 'An error occurred while fetching the article' });
        }
    }
}

module.exports = new ArticleController();
